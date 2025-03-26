import Image from "next/image";
import ImgBg from "../public/images/posts/ufobg.jpg";
import { Button } from "./ui/button";
import Link from "next/link";

export default function HeroBg() {
  return (
    <section className="relative h-[50vh] w-full overflow-hidden rounded-lg mb-6">
      {/* Background Image */}
      <Image
        src={ImgBg}
        alt="Hero background"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-4 text-center">
        <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
          Blog Name
        </h1>
        <p className="mt-4 max-w-2xl pb-4 text-xl text-white/90">
          
        </p>
        <Button>
          <Link href="/latest">Latest Posts</Link>
        </Button>
      </div>
    </section>
  );
}
