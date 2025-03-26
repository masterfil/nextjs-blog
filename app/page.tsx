import CardBig from "@/components/card-big";
import CardGrid from "@/components/card-grid";
import CardGrid2 from "@/components/card-grid2";
import FeaturedPosts from "@/components/featured-posts";
import { Hero } from "@/components/hero";
import HeroBg from "@/components/hero-bg";
import { Newsletter } from "@/components/newsletter";
import { getAllPosts } from "@/lib/posts";

export default async function Home() {
  const posts = await getAllPosts();
  const mainPost = posts[0];
  const latestPosts = posts.slice(0, 6);
  const selectedPosts = [posts[1], posts[3], posts[5]];
  return (
    <>
      {/* <HeroBg /> */}
      {/* <Hero /> */}
      <CardBig post={mainPost} />
      <FeaturedPosts posts={selectedPosts} />
      {/* <CardGrid posts={posts} /> */}
      <CardGrid2 posts={latestPosts} title="Latest Posts"/>
      <Newsletter />
    </>
  );
}
