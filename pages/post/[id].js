import { supabase } from 'lib/supabase'

export const revalidate = 60

export async function getServerSideProps({params}) {
  let { data } = await supabase
    .from('posts')
    .select()
    .eq('id', params.id)
    .single()
    
  return {
    props: {
      post: data
    },
  }
}

export default function Home({post}) {
  return (
    <main className="flex min-h-screen flex-col p-24">
        <h1>Post Details</h1>
        <h2>{post.title}</h2>
        <p>{post.content}</p>
        <a href={post.link}>More info</a>
    </main>
  )
}