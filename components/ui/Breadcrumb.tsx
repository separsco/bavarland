import Link from "next/link";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
  className?: string;
};

function BreadcrumbSeparator() {
  return (
    <svg
      aria-hidden
      xmlns="http://www.w3.org/2000/svg"
      width="6"
      height="12"
      viewBox="0 0 6 12"
      fill="none"
    >
      <path
        d="M5.23 11.5583C5.10333 11.5583 4.97667 11.5117 4.87667 11.4117L0.53 7.065C-0.176667 6.35833 -0.176667 5.19833 0.53 4.49167L4.87667 0.145C5.07 -0.0483333 5.39 -0.0483333 5.58333 0.145C5.77667 0.338333 5.77667 0.658333 5.58333 0.851667L1.23667 5.19833C0.916667 5.51833 0.916667 6.03833 1.23667 6.35833L5.58333 10.705C5.77667 10.8983 5.77667 11.2183 5.58333 11.4117C5.48333 11.505 5.35667 11.5583 5.23 11.5583Z"
        fill="#23242E"
      />
    </svg>
  );
}

export function Breadcrumb({ items, className = "" }: BreadcrumbProps) {
  return (
    <nav
      aria-label="مسیر صفحه"
      className={`text-sm text-muted ${className}`.trim()}
    >
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={`${item.label}-${index}`} className="inline-flex items-center gap-2">
              {index > 0 ? <BreadcrumbSeparator /> : null}

              {item.href && !isLast ? (
                <Link href={item.href} className="line-clamp-1 text-foreground">
                  {item.label}
                </Link>
              ) : (
                <span className={isLast ? "transition-colors hover:text-primary" : undefined}>
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
