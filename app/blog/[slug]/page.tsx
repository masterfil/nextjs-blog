import { getPostBySlug } from "@/lib/posts";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import React from "react";
import { formatDate } from "@/lib/utils";
import RemoteMDX from "@/components/remoteMDX";
import { ArrowLeft } from "lucide-react";

export default async function Post({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const { metadata, content } = post;
  const { title, image, author, date } = metadata;

  return (
    <article>
      {image && (
        <div className="relative mb-6 h-96 w-full overflow-hidden rounded-lg">
          <Image className="object-cover" src={image} alt={title || ""} fill />
        </div>
      )}
      <header>
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="tex-xs text-muted-foreground mt-3">
          {author} / {formatDate(date ?? "")}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {metadata.tags?.map((tag) => (
            <span
              key={tag}
              className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800"
            >
              {tag}
            </span>
          ))}
          {metadata.categories?.map((category) => (
            <span
              key={category}
              className="inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800"
            >
              {category}
            </span>
          ))}
        </div>
      </header>
      <section className="prose dark:prose-invert mt-16 max-w-none">
        <RemoteMDX source={content} />
      </section>
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-2 text-sm font-light"
      >
        <ArrowLeft /> Go Back
      </Link>
    </article>
  );
}
