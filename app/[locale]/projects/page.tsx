import Link from "next/link";
import type { Route } from "next";
import { notFound } from "next/navigation";
import { locales, isLocale } from "@/lib/locales";
import { projects } from "@/data/projects";

interface ProjectsIndexPageProps {
  params: Promise<{ locale: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function ProjectsIndexPage({ params }: ProjectsIndexPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const t = copy[locale];
  const localizedProjects = projects.map((project) => ({
    slug: project.slug,
    name: project.name[locale],
    description: project.teaser.description[locale],
    tags: project.teaser.tags[locale],
    status: project.status[locale],
  }));

  return (
    <div className="space-y-8">
      <section>
        <p className="text-sm uppercase tracking-[0.4em] text-white/60">{t.eyebrow}</p>
        <h2 className="mt-2 text-3xl font-semibold">{t.title}</h2>
        <p className="mt-2 max-w-3xl text-white/80">{t.description}</p>
      </section>

      <section className="grid gap-4">
        {localizedProjects.map((project) => (
          <article
            key={project.slug}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-white/30"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                  {project.status}
                </p>
                <h3 className="mt-1 text-2xl font-semibold text-white">{project.name}</h3>
              </div>
              <Link
                href={`/${locale}/projects/${project.slug}` as Route}
                className="rounded-full border border-white/30 px-4 py-1.5 text-sm font-medium text-white hover:border-white"
              >
                {t.viewLabel}
              </Link>
            </div>
            <p className="mt-3 text-sm text-white/80">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-wide text-white/70"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}

const copy = {
  ja: {
    eyebrow: "PROJECTS",
    title: "プロジェクト一覧",
    description:
      "PrimePic AI や AIセキュリティシステム（Gate Runtime）など、一次情報で追跡できる取り組みをまとめています。",
    viewLabel: "詳細を見る",
  },
  en: {
    eyebrow: "PROJECTS",
    title: "Project portfolio",
    description:
      "Explore first-hand build logs across PrimePic AI and the AI Security System (Gate Runtime).",
    viewLabel: "View details",
  },
};
