import Hero from '@components/hero'
import Banner from '@components/banner'
import Card from '@components/card'
export const revalidate = 60

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Banner />
      <Hero />
      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
      <Card 
            key="{item.id}"
            title="{item.title}"
            link="{item.link}"
            text="{item.content}" />
      </div>
    </main>
  )
}