import path from "path";
import fs from "fs";
import matter from "gray-matter";

// acces root post directory
const rootPostsDirectory = path.join(process.cwd(), `posts`);

export type Post = {
  metadata: PostMetadata;
  content: string;
};

export type PostMetadata = {
  title?: string;
  summary?: string;
  image?: string;
  author?: string;
  date?: string;
  slug?: string;
  className?: string;
};

// Read the content of all posts and parse
export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const filePath = path.join(rootPostsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(filePath, { encoding: "utf-8" });
    const { data, content } = matter(fileContents);

    return {
      metadata: { ...data, slug },
      content,
    };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return null;
  }
}

// Get all posts metadata
export async function getAllPosts(limit?: number): Promise<PostMetadata[]> {
  const files = fs.readdirSync(rootPostsDirectory);

  const posts = files
    .map((file) => getPostMetadata(file))
    .sort((a, b) => {
      if (new Date(a.date ?? "") < new Date(b.date ?? "")) {
        return 1;
      } else {
        return -1;
      }
    });

  if (limit) {
    return posts.slice(0, limit);
  }

  return posts;
}

// Get metadata of a single post
export function getPostMetadata(filepath: string): PostMetadata {
  const slug = filepath.replace(/\.mdx$/, "");
  const filePath = path.join(rootPostsDirectory, filepath);
  const fileContent = fs.readFileSync(filePath, { encoding: "utf-8" });
  const { data: frontmatter } = matter(fileContent);
  return { ...frontmatter, slug };
}
