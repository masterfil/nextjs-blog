"use client";

import { PostMetadata } from "@/lib/posts";
import React, { useEffect, useMemo, useState } from "react";
import { Input } from "./ui/input";
import CardGrid2 from "./card-grid2";
import { Badge } from "./ui/badge";

export default function PostWithSearch({ posts }: { posts: PostMetadata[] }) {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // const filtered = posts.filter((post) =>
  //   post.title?.toLocaleLowerCase().includes(query.toLocaleLowerCase()),
  // );

  const uniqueCategories = [
    "All",
    ...new Set(posts.flatMap((post) => post.categories || [])),
  ];

  // const filteredByCategory = posts.filter((post) =>
  //   post.categories?.includes(selectedCategory),
  // );

  // Memoized filtered posts for better performance
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesQuery = post.title
        ?.toLocaleLowerCase()
        .includes(query.toLocaleLowerCase());

      const matchesCategory =
        selectedCategory === "All" ||
        post.categories?.includes(selectedCategory);

      return matchesQuery && matchesCategory;
    });
  }, [posts, query, selectedCategory]);

  const handleClick = (category: string) => {
    setSelectedCategory(category);
  };


  return (
    <>
      <div className="flex w-3xl items-center justify-between space-x-2">
        <h2 className="text-2xl font-bold">All Post</h2>
        <Input
          type="text"
          placeholder="search posts..."
          className="h-9 w-1/2"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="pt-4">
        {uniqueCategories.map((uniqueCategorie) => (
          <Badge
            key={uniqueCategorie}
            variant={uniqueCategorie === selectedCategory ? "default" : "secondary"}
            className="mr-2 cursor-pointer space-x-2 text-xs"
            onClick={() => handleClick(uniqueCategorie)}
          >
            {uniqueCategorie}
          </Badge>
        ))}
      </div>
      {filteredPosts.length > 0 ? (
        <CardGrid2 posts={filteredPosts} />
      ) : (
        <div className="py-12">
          <h2 className="text-muted-foreground text-center">No Resoults..</h2>
        </div>
      )}
    </>
  );
}
