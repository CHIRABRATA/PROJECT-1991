import React from 'react'
import { Link } from 'react-router-dom'

const Icon = ({ title, path }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden className="inline-block">
    <title>{title}</title>
    <path d={path} fill="currentColor" />
  </svg>
)

const Footer = () => (
  <footer role="contentinfo" aria-label="Footer" className="mt-20">
    <div className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 footer-gradient -z-10" />
      <div className="absolute inset-x-0 top-0 h-px bg-white/10" />

      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">

          {/* Brand */}
          <div>
            <div className="text-lg font-semibold tracking-wide text-white">
              SRP
            </div>
            <p className="mt-1 text-white/80">
              Student Resource Platform
            </p>
            <p className="mt-2 max-w-xs text-xs text-white/60">
              A modern, accessible and student-focused learning hub.
            </p>
          </div>

          {/* Links */}
          <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-x-8 gap-y-3">
            {[
              ['Resources', '/resources'],
              ['Labs', '/labs'],
              ['Quizzes', '/quizzes'],
              ['Forum', '/forum'],
              ['Feedback', '/feedback'],
              ['Login', '/auth'],
            ].map(([label, path]) => (
              <Link
                key={path}
                to={path}
                className="text-white/75 hover:text-white transition-colors link-underline"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Social */}
          <div className="md:text-right">
            <div className="text-white/90 font-medium">
              Social
            </div>

            <div className="mt-3 flex md:justify-end gap-4">
              <a aria-label="GitHub" href="#" className="hover-raise text-white/75 hover:text-white">
                <Icon title="GitHub" path="M12 .5a11.5 11.5 0 0 0-3.64 22.42c.58.1.79-.25.79-.56v-2c-3.22.7-3.9-1.55-3.9-1.55a3.06 3.06 0 0 0-1.28-1.68c-1.05-.72.08-.71.08-.71a2.43 2.43 0 0 1 1.78 1.2 2.47 2.47 0 0 0 3.38 1 2.46 2.46 0 0 1 .73-1.55c-2.57-.29-5.27-1.28-5.27-5.7A4.47 4.47 0 0 1 6.11 7a4.16 4.16 0 0 1 .11-3s1-.32 3.3 1.23a11.39 11.39 0 0 1 6 0c2.25-1.55 3.29-1.23 3.29-1.23a4.16 4.16 0 0 1 .12 3 4.46 4.46 0 0 1 1.18 3.1c0 4.43-2.71 5.41-5.29 5.69a2.76 2.76 0 0 1 .79 2.15v3.18c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
              </a>
              <a aria-label="LinkedIn" href="#" className="hover-raise text-white/75 hover:text-white">
                <Icon title="LinkedIn" path="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5ZM3 9h4v12H3Zm7 0h3.8v1.7h.05a4.17 4.17 0 0 1 3.75-2.06c4 0 4.75 2.63 4.75 6.05V21H19v-5.33c0-1.27 0-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.8V21H10Z" />
              </a>
              <a aria-label="X" href="#" className="hover-raise text-white/75 hover:text-white">
                <Icon title="X" path="M18.243 2H21l-7.29 8.333L22 22h-6.32l-4.96-6.044L4.81 22H2l7.78-8.89L2 2h6.458l4.5 5.525L18.243 2Z" />
              </a>
            </div>

            <div className="mt-4 text-xs text-white/60">
              © {new Date().getFullYear()} SRP
            </div>
            <a
              href="mailto:team@srp.example"
              className="mt-1 inline-block text-xs text-white/70 hover:text-white"
            >
              team@srp.example
            </a>
          </div>

        </div>
      </div>
    </div>
  </footer>
)

export default Footer
