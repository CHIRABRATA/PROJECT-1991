import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrthographicCamera, OrbitControls } from '@react-three/drei'

function Beam() {
  const mat = useRef()
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    if (mat.current) mat.current.uniforms.uTime.value = t
  })
  return (
    <mesh position={[0.25, 0, 0]}>
      <planeGeometry args={[1.2, 6, 1, 1]} />
      <shaderMaterial
        ref={mat}
        transparent
        depthWrite={false}
        blending={3}
        uniforms={{
          uTime: { value: 0 },
          uColor1: { value: [0.35, 0.53, 1.0] },
          uColor2: { value: [0.55, 0.36, 0.96] },
        }}
        vertexShader={`
          varying vec2 vUv;
          void main(){
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `}
        fragmentShader={`
          varying vec2 vUv;
          uniform float uTime;
          uniform vec3 uColor1;
          uniform vec3 uColor2;
          float gaussian(float x, float b){ return exp(-pow(x,2.0)/b); }
          float flicker(float t){ return 0.9 + 0.1*sin(t*0.6) + 0.03*sin(t*2.0); }
          void main(){
            float center = 0.5;
            float x = abs(vUv.x - center);
            float beam = gaussian(x, 0.015);
            float halo = gaussian(x, 0.22);
            float fadeY = smoothstep(0.02, 0.18, vUv.y) * (1.0 - smoothstep(0.82, 0.98, vUv.y));
            float f = flicker(uTime);
            vec3 core = mix(uColor1, uColor2, vUv.y);
            vec3 col = core * (beam*1.6*f + halo*0.35) + vec3(1.0) * beam*0.65;
            gl_FragColor = vec4(col, (beam*0.92 + halo*0.55) * fadeY);
          }
        `}
      />
    </mesh>
  )
}

function Particles() {
  const count = 160
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i*3+0] = (Math.random() - 0.5) * 2
      arr[i*3+1] = (Math.random() - 0.5) * 6
      arr[i*3+2] = 0
    }
    return arr
  }, [])
  const ref = useRef()
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    if (ref.current) ref.current.rotation.z = Math.sin(t*0.04) * 0.02
  })
  return (
    <points ref={ref} position={[0.1, 0, 0]}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={positions.length/3} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#6ea8ff" transparent opacity={0.6} depthWrite={false} />
    </points>
  )
}

function InteractiveModel() {
  const group = useRef()
  const mat = useRef()
  useFrame(({ mouse }) => {
    if (group.current) {
      group.current.rotation.y += 0.002
    }
  })
  return (
    <group ref={group} position={[-0.8, -0.3, 0]}>
      <mesh
        onPointerDown={() => { if (mat.current) mat.current.color.set('#6ea8ff') }}
        onPointerOver={() => { if (mat.current) mat.current.emissiveIntensity = 0.6 }}
        onPointerOut={() => { if (mat.current) mat.current.emissiveIntensity = 0.2 }}
      >
        <boxGeometry args={[0.6, 0.12, 0.4]} />
        <meshStandardMaterial ref={mat} color="#1f2a44" emissive="#6ea8ff" emissiveIntensity={0.2} roughness={0.35} metalness={0.15} />
      </mesh>
    </group>
  )
}

const HeroScene = () => (
  <div className="absolute inset-0 z-0">
    <Canvas gl={{ antialias: true, powerPreference: 'high-performance' }} dpr={[1, 2]}>
      <OrthographicCamera makeDefault position={[0, 0, 5]} zoom={220} />
      <ambientLight intensity={0.6} />
      <pointLight position={[0.6, 0.6, 1]} intensity={0.8} />
      <Beam />
      <Particles />
      <InteractiveModel />
      <OrbitControls enableZoom enablePan={false} enableDamping dampingFactor={0.08} zoomSpeed={0.4} rotateSpeed={0.35} />
    </Canvas>
    <div className="pointer-events-none absolute inset-0" style={{
      background: 'radial-gradient(1200px 600px at 60% 50%, rgba(59,130,246,0.12), transparent 60%)',
      backdropFilter: 'blur(2px)'
    }} />
    <div className="pointer-events-none absolute inset-0" style={{
      backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'160\' height=\'160\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'1\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.02\'/%3E%3C/svg%3E")',
      backgroundSize: 'auto'
    }} />
  </div>
)

export default HeroScene

