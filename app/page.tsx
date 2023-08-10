import { ImageGrid, TopItems } from "@/components";
import { BsFacebook, BsInstagram } from "react-icons/bs";

export default function Home() {
  return (
    <div className="h-screen w-screen bg-black flex flex-col justify-center items-center text-white">
      <div className="flex flex-row space-x-4 items-center">
        <TopItems name="Facebook" icon={BsFacebook} />
        <div className="h-1 w-1 rounded-full bg-red-600" />
        <TopItems name="Instagram" icon={BsInstagram} />
      </div>
      <div className="py-4">
        <h1 className="md:text-6xl text-5xl font-bold text-orange-700 ">
          Rush Fashion
        </h1>
      </div>
      <div className="text-center text-sm font-light px-4 md:px-0 opacity-60">
        Discover your dream clothing{" "}
        <span className="text-orange-300 ">Designs - Brands</span> with us. We
        are here to full fill your dreams!
      </div>
      <div>
        <ImageGrid />
      </div>
    </div>
  );
}
