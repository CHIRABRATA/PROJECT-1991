import { createClient } from '@supabase/supabase-js'

const url = import.meta.env.VITE_SUPABASE_URL
const key = import.meta.env.VITE_SUPABASE_ANON_KEY

let supabase
if (typeof url === 'string' && url && typeof key === 'string' && key) {
  supabase = createClient(url, key)
} else {
  const stub = {
    auth: {
      async getSession() {
        return { data: { session: null }, error: null }
      },
      async signInWithPassword() {
        return { data: null, error: new Error('Supabase env vars missing') }
      },
      async signUp() {
        return { data: null, error: new Error('Supabase env vars missing') }
      },
      async signOut() {
        return { error: new Error('Supabase env vars missing') }
      },
      async signInWithOAuth() {
        return { data: null, error: new Error('Supabase env vars missing') }
      },
    },
  }
  console.warn('Supabase env vars missing: set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY')
  supabase = stub
}

export { supabase }
