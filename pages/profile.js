import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import Account from '@components/account'

const Home = () => {
  const session = useSession()
  const supabase = useSupabaseClient()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {!session ? (
        <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} theme="dark" />
      ) : (
        <Account session={session} />
      )}
    </main>
  )
}

export default Home
