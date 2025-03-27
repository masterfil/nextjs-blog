"use client";

import { ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const GoBack = () => {
  const router = useRouter();

  return (
    <Button
      className="my-8 inline-flex items-center gap-1 font-semibold hover:underline"
      onClick={() => router.back()}
    >
      <ArrowLeft />
      Go Back
    </Button>
  );
};

export default GoBack;
