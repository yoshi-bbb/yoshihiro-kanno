import { notFound } from "next/navigation";
import type { Route } from "next";
import Link from "next/link";
import { locales, isLocale } from "@/lib/locales";
import { projects } from "@/data/projects";

interface ProjectDetailPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    projects.map((project) => ({
      locale,
      slug: project.slug,
    })),
  );
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { locale, slug } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const summary = project.summary;
  const summaryParagraphs = summary.description[locale];

  return (
    <div className="space-y-8">
      <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
        <p className="text-xs uppercase tracking-[0.4em] text-white/60">
          {summary.eyebrow[locale]} ・ {project.status[locale]}
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-white">{summary.title[locale]}</h1>
        <div className="mt-3 space-y-3 text-sm text-white/80">
          {summaryParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        {summary.externalLink && (
          <a
            href={summary.externalLink.url}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex rounded-full bg-white px-5 py-2 text-sm font-semibold text-black"
          >
            {summary.externalLink.label[locale]}
          </a>
        )}
      </section>

      {project.sections.map((section) => (
        <article key={section.id} className="rounded-3xl border border-white/10 bg-white/[0.02] p-5">
          <h2 className="text-xl font-semibold text-white">{section.title[locale]}</h2>
          {section.description && (
            <p className="mt-2 text-sm text-white/80">{section.description[locale]}</p>
          )}
          {section.bullets && (
            <ul className="mt-3 space-y-1 text-sm text-white/80">
              {section.bullets[locale].map((bullet) => (
                <li key={bullet}>• {bullet}</li>
              ))}
            </ul>
          )}
          {section.groupedBullets && (
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {section.groupedBullets.map((group) => (
                <div key={group.label.en} className="rounded-2xl border border-white/10 p-4">
                  <p className="text-xs uppercase tracking-wide text-white/60">
                    {group.label[locale]}
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-white/80">
                    {group.items[locale].map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
          {section.disclaimer && (
            <p className="mt-3 text-xs text-white/60">{section.disclaimer[locale]}</p>
          )}
        </article>
      ))}

      {project.statusNote && (
        <section className="rounded-3xl border border-white/10 bg-white/[0.06] p-5 text-center">
          <p className="text-sm text-white/80">{project.statusNote[locale]}</p>
        </section>
      )}

      <section className="rounded-3xl border border-dashed border-white/20 p-5 text-center text-sm text-white/75">
        <p>
          {locale === "ja"
            ? "実装の詳細や PoC / 協業のご相談はお問い合わせからお願いします。"
            : "For PoC or collaboration inquiries, please reach out via the contact form."}
        </p>
        <Link
          href={`/${locale}/contact` as Route}
          className="mt-3 inline-flex rounded-full bg-white px-5 py-2 text-sm font-semibold text-black"
        >
          {locale === "ja" ? "お問い合わせ" : "Contact"}
        </Link>
      </section>
    </div>
  );
}
