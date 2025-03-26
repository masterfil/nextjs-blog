import { PostMetadata } from "@/lib/posts";
import CardPost4 from "./card-post4";

export default function CardList({ posts }: { posts: PostMetadata[] }) {
  return (
    <div className="container mx-auto">
      <ul className="flex flex-col gap-8">
        {posts.map((post) => (
          <CardPost4 key={post.slug} post={post} />
        ))}
      </ul>
    </div>
  );
}
