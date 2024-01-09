import Image from "next/image";

export default function Banner() {
  return (
    <main>
      <div className="relative">
        <Image
          src={"/banner.avif"}
          alt="Banner Images"
          width={1920}
          height={1080}
          className="object-cover h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]"
        />
        <div className="absolute w-full top-1/2 text-center">
          <p className="text-sm sm:text-lg">Not sure where to go? Perfect.</p>
          <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150 border-none active:border-none">
            I&apos;m flexible
          </button>
        </div>
      </div>
    </main>
  );
}
