import Image from 'next/image'

export default function Home() {
  return (
    <div className='w-full h-screen mx-auto grid place-items-center text-4xl'>
      <Image
                alt=""
                src="/background.jpeg"
                width={1920}
                height={1080}
                className="pointer-events-none h-screen w-screen absolute z-0 object-cover brightness-[0.7]"
            />

      <section className='text-center relative pr-14 pt-14'>
        <h1 className=' '>WEBSITE IS</h1>
        <h1 className=' '>UNDER MAINTENANCE</h1>
      </section>
    </div>
  )
}
