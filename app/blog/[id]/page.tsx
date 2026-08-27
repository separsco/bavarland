import { notFound } from "next/navigation";
import { BlogPostDetail } from "@/components/blog/BlogPostDetail";
import { blogPosts, getBlogPostById } from "@/data/blog";

type BlogPostPageProps = {
  params: Promise<{ id: string }>;
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { id } = await params;
  const post = getBlogPostById(id);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter((item) => item.id !== post.id)
    .slice(0, 6);

  return <BlogPostDetail post={post} relatedPosts={relatedPosts} />;
}
