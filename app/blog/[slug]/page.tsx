import { getPostBySlug } from "@/lib/posts";
import { notFound } from "next/navigation";
import Image from "next/image";
import React from "react";
import { formatDate } from "@/lib/utils";
import RemoteMDX from "@/components/remoteMDX";
import { Badge } from "@/components/ui/badge";
import GoBack from "@/components/go-back";

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
      <header className="mb-12">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="tex-xs text-muted-foreground mt-3">
          {author} / {formatDate(date ?? "")}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {metadata.categories?.map((category) => (
            <Badge
              key={category}
              variant="default"
              className="space-x-2 text-[10px]"
            >
              {category}
            </Badge>
          ))}
          {metadata.tags?.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="space-x-2 text-[10px]"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </header>
      <section className="prose prose-sm dark:prose-invert max-w-none">
        <RemoteMDX source={content} />
      </section>
      <GoBack />
    </article>
  );
}
