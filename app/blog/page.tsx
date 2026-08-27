import { BlogCategories } from "@/components/blog/BlogCategories";
import { BlogHero } from "@/components/blog/BlogHero";
import { BlogPostsSection } from "@/components/blog/BlogPostsSection";

export default function BlogPage() {
  return (
    <>
      <BlogHero />
      <BlogCategories />
      <BlogPostsSection />
    </>
  );
}
