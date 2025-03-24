import { getPostBySlug } from "@/lib/posts";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import React from "react";
import { formatDate } from "@/lib/utils";
import RemoteMDX from "@/components/remoteMDX";

export default async function Post({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const { metadata, content } = post;
  const { title, image, author, date } = metadata;

  return (
    <section className="pb-24 pt-10">
      <div className="container max-w-3xl">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-light "
        >
          <span>{`<- Back to posts`}</span>
        </Link>
        {image && (
          <div className="relative mb-6 h-96 w-full overflow-hidden rounded-lg">
            <Image
              className="object-cover"
              src={image}
              alt={title || ""}
              fill
            />
          </div>
        )}
        <header>
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="mt-3 tex-xs text-muted-foreground">
            {author} / {formatDate(date ?? "")}
          </p>
        </header>
        <main className="prose dark:prose-invert mt-16">
          <RemoteMDX source={content} />
        </main>
      </div>
    </section>
  );
}
