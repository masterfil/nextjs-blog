import { PostMetadata } from "@/lib/posts";
import CardPost3 from "./card-post3";

export default function CardGrid2({
  posts,
  title,
}: {
  posts: PostMetadata[];
  title?: string;
}) {
  return (
    <div className="mb-6">
      {title && <h2 className="pb-4 text-2xl font-bold">{title}</h2>}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <CardPost3 key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
