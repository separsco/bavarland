import { PlaceholderPage } from "@/components/layout/PlaceholderPage";

type BlogPostPageProps = {
  params: Promise<{ id: string }>;
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { id } = await params;

  return (
    <PlaceholderPage
      title="جزئیات مقاله"
      description={`محتوای مقاله شماره ${id} بعداً تکمیل می‌شود.`}
    />
  );
}
