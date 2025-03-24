import Link from "next/link";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="bg-background w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Welcome to Our Blog
            </h1>
            <p className="text-muted-foreground mx-auto max-w-[700px] md:text-xl">
              Discover insights, tutorials, and stories from our team of
              experts. We cover everything from technology to lifestyle.
            </p>
          </div>
          <div className="space-x-4">
            <Button asChild>
              <Link href="/latest">Latest Posts</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/categories">Browse Categories</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
