import Head from 'next/head'
import Hero from '@components/hero'
import Banner from '@components/banner'
import Card from '@components/card'
import { supabase } from 'lib/supabase'

export const revalidate = 60

export async function getServerSideProps() {
  let { data } = await supabase.from('posts').select()
  return {
    props: {
      posts: data
    },
  }
}

export default function Home({ posts }) {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Banner />
      <Hero />
      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
      {posts?.map((item) => (
          <Card 
            key={item.id}
            title={item.title}
            link={item.link}
            text={item.content} />
        ))}
      </div>
    </main>
    </div>
  )
}
