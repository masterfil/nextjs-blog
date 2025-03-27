import CardPost from "./card-post";
import { PostMetadata } from "@/lib/posts";

export default function CardGrid({ posts }: { posts: PostMetadata[] }) {
  return (
    <div className="py-12">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <CardPost key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
