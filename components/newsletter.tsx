import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Link from "next/link";

export const Newsletter = () => {
  return (
    <div className="bg-muted container w-full px-4 py-12 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
            Subscribe to my newsletter
          </h2>
          <p className="text-muted-foreground max-w-[600px] md:text-xl">
            Get notified when I publish new articles and tutorials
          </p>
        </div>
        <div className="mx-auto w-full max-w-md space-y-2">
          <form className="flex space-x-2">
            <Input
              className="max-w-lg flex-1"
              placeholder="Enter your email"
              type="email"
              autoComplete="email"
            />
            <Button type="submit">Subscribe</Button>
          </form>
          <p className="text-muted-foreground text-xs">
            By subscribing, you agree to our{" "}
            <Link href="/terms" className="underline underline-offset-2">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="underline underline-offset-2">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
