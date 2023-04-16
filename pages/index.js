import Image from "next/image"
import cat1 from "../public/cool.jpg"

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center w-full h-screen space-y-8 lg-flex-row'>
      <div className='relative w-32 h-32 overflow-hidden rounded-full ring-2 ring-pink-300 ring-offset-4'>
        <Image
          style={{objectFit:"cover"}}
          src={cat1}
          alt='Picture of a cat'
          fill='true'
          priority
        />
      </div>
      <h1 className='text-3xl'>Tailwind Cat App</h1>
    </div>
  )
}