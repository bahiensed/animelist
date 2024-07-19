import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <header className="bg-hero bg-center bg-cover bg-no-repeat sm:p-16 py-16 px-8 flex justify-center lg:items-center max-lg:flex-col w-full sm:gap-16 gap-0">
      <div className="flex-1 flex flex-col gap-8">
        <Link href={"https://www.rohling.com.br"}>
          <Image
            src="/logo.png"
            alt="logo"
            width={128}
            height={122}
            className="object-contain"
          />        
        </Link>

        <h1 className="sm:text-6xl text-5xl text-white lg:max-w-lg font-bold leading-[120%]">
          We both really <span className="red-gradient">love to Watch</span> Anime shows
        </h1>
      </div>

      <div className="lg:flex-1 relative w-full h-[50vh] justify-bottom">
        <Image src="/anime.png" alt="anime" fill className="object-contain" />
      </div>
    </header>
  );
}

export default Hero;
