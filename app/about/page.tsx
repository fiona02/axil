import { Button } from "@/components/ui/button"
import Image from "next/image"
import { TbArrowUpRight } from "react-icons/tb"

const pageAbout = () => {
  return (
    <div>
      <div className="bg-[url('/image/whoweare.jpg')] bg-center bg-cover">
        <h1 className="container py-32 text-6xl font-semibold text-black tracking-widest text-center lg:py-64"> Who we are </h1>
      </div>

      <div className="container">
        <div className="pt-4">
          <h2 className="text-3xl font-semibold text-center lg:p-10 lg:text-5xl"> We have greate idea</h2>
          <p className="text-2xl text-center font-medium pb-10 mt-5">
          We work closely with you to understand your unique style and preferences, then use our expertise to bring your vision to life. From statement lighting fixtures to bold color schemes, we incorporate textures, patterns, and materials that make a statement
          </p>
        </div>
        <div className="items-center lg:flex gap-x-8">
          {/* hinh ben trai */}
          <div className="w-full">
            <Image src="/image/gallery1123.jpg" width={700} height={700} alt="bedroom"/>
          </div>
          {/* hinh ben phai */}
          <div>
            <p className="pb-8 tracking-wide mt-6">
              We work closely with you to understand your unique style and preferences, then use our expertise to bring your vision to life. From statement lighting fixtures to bold color schemes, we incorporate textures, patterns, and materials that make a statement
              <br/>
              We work closely with you to understand your unique style and preferences, then use our expertise to bring your vision to life. From statement lighting fixtures to bold color schemes, we incorporate textures, patterns, and materials that make a statement
              <br/><br/>
              <span className="text-xl font-extrabold tracking-tight">
              We work closely with you to understand your unique style and preferences, then

              </span>
            </p>
            <Button className="inline-flex items-center px-8 py-3 shadow-lg hove:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2"> Read more <TbArrowUpRight className="w-5 h-5 ml-2"/></Button>
          </div>
        </div>

        {/* Danh sach thanh vien */}
        <div className="lg:py-20">
          <div className="pt-8 pb-4">
            <h1 className="text-4xl font-bold tracking-wider text-center uppercase">Team</h1>
          </div>
          
          <div className="grid py-8 gap-20 lg:grid-cols-3">
            {/* nguoi 1 */}
            <div className="border-2 border-primary">
              <div className="p-4 text-center bg-gray-100 aspect-square dark:bg-tertiary -m-0.5 transition hover:-translate-y-3 hover:-translate-x-3">
                <Image src="/image/profile2.jpg" width={200} height={200} alt="" className="mx-auto rounded-full"/>
                <h2 className="py-4 text-2xl font-semibold uppercase ">Buidling surveys</h2>
                <p className="text-sm">
                to understand your unique style and preferences, then use our expertise to bring your vision to life. From statement lighting fixtures to bold color schemes, we incorporate textures, patterns
                </p>
              </div>
            </div>

            {/* nguoi 2 */}
            <div className="border-2 border-primary">
              <div className="p-4 text-center bg-gray-100 aspect-square dark:bg-tertiary -m-0.5 transition hover:-translate-y-3 hover:-translate-x-3">
                <Image src="/image/profile1.jpg" width={200} height={200} alt="" className="mx-auto rounded-full"/>
                <h2 className="py-4 text-2xl font-semibold uppercase ">Buidling surveys</h2>
                <p className="text-sm">
                to understand your unique style and preferences, then use our expertise to bring your vision to life. From statement lighting fixtures to bold color schemes, we incorporate textures, patterns
                </p>
              </div>
            </div>
            {/* nguoi 3 */}
            <div className="border-2 border-primary">
              <div className="p-4 text-center bg-gray-100 aspect-square dark:bg-tertiary -m-0.5 transition hover:-translate-y-3 hover:-translate-x-3">
                <Image src="/image/profile3.jpg" width={200} height={200} alt="" className="mx-auto rounded-full"/>
                <h2 className="py-4 text-2xl font-semibold uppercase ">Buidling surveys</h2>
                <p className="text-sm">
                to understand your unique style and preferences, then use our expertise to bring your vision to life. From statement lighting fixtures to bold color schemes, we incorporate textures, patterns
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default pageAbout