type PlaceholderPageProps = {
  title: string;
  description?: string;
};

export function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <section className="mx-auto flex w-full max-w-7xl flex-1 flex-col items-start justify-center gap-3 px-4 py-20 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold text-foreground">{title}</h1>
      {description ? (
        <p className="max-w-xl text-base leading-8 text-muted">{description}</p>
      ) : null}
    </section>
  );
}
