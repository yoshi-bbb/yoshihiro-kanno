import Image from "next/image";
import { notFound } from "next/navigation";
import { locales, isLocale } from "@/lib/locales";
import {
  profileBasics,
  profileHero,
  profileTimeline,
  profileSkills,
  profileStrengths,
  profileWorkSummaries,
  profileCertificates,
} from "@/data/profile";

interface ProfilePageProps {
  params: Promise<{ locale: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function ProfilePage({ params }: ProfilePageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const basics = profileBasics[locale];
  const timeline = profileTimeline[locale];
  const skills = profileSkills[locale];
  const work = profileWorkSummaries[locale];
  const certificates = profileCertificates;

  return (
    <div className="space-y-10">
      <section>
        <p className="text-sm uppercase tracking-[0.4em] text-white/60">PROFILE</p>
        <h2 className="mt-2 text-3xl font-semibold">
          {locale === "ja" ? "菅野吉洋 / Yoshihiro Kanno" : "Yoshihiro Kanno"}
        </h2>
        <p className="mt-2 max-w-3xl text-white/80">{profileHero.oneLiner[locale]}</p>
        <p className="mt-3 text-sm text-white/70">{profileHero.intro[locale]}</p>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {basics.map((fact) => (
          <div key={fact.label} className="rounded-2xl border border-white/10 p-4">
            <p className="text-xs uppercase tracking-wide text-white/60">{fact.label}</p>
            {fact.href ? (
              <a
                href={fact.href}
                target="_blank"
                rel="noreferrer"
                className="mt-1 inline-flex text-lg font-semibold text-[var(--accent)]"
              >
                {fact.value}
              </a>
            ) : (
              <p className="mt-1 text-lg font-semibold text-white">{fact.value}</p>
            )}
            {fact.description && (
              <p className="mt-1 text-sm text-white/70">{fact.description}</p>
            )}
          </div>
        ))}
      </section>

      <section>
        <h3 className="text-xl font-semibold">
          {locale === "ja" ? "経歴" : "Career timeline"}
        </h3>
        <div className="mt-4 space-y-3">
          {timeline.map((item) => (
            <div
              key={`${item.title}-${item.description ?? ""}`}
              className="rounded-2xl border border-white/10 p-4"
            >
              <p className="text-base font-semibold text-white">{item.title}</p>
              {item.subtitle && (
                <p className="text-sm text-white/60">{item.subtitle}</p>
              )}
              {item.description && (
                <p className="mt-1 text-sm text-white/80">{item.description}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold">
          {locale === "ja" ? "スキルセット" : "Skill matrix"}
        </h3>
        <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((category) => (
            <div key={category.title} className="rounded-2xl border border-white/10 p-4">
              <p className="text-xs uppercase tracking-wide text-white/60">
                {category.title}
              </p>
              <ul className="mt-2 space-y-1 text-sm text-white/80">
                {category.items.map((item) => (
                  <li key={`${category.title}-${item.label}`}>
                    <span className="font-medium text-white">{item.label}</span>{" "}
                    <span className="text-white/60">{item.experience}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
        <h3 className="text-xl font-semibold">
          {locale === "ja" ? "得意領域" : "Strengths"}
        </h3>
        <p className="mt-2 text-sm text-white/80">{profileStrengths[locale]}</p>
      </section>

      <section>
        <h3 className="text-xl font-semibold">
          {locale === "ja" ? "職務概要" : "Work summary"}
        </h3>
        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          {work.map((org) => (
            <div key={org.org} className="rounded-3xl border border-white/10 p-5">
              <p className="text-sm uppercase tracking-widest text-white/60">
                {org.org}
              </p>
              <h4 className="mt-1 text-lg font-semibold text-white">{org.role}</h4>
              {org.description && (
                <p className="text-sm text-white/70">{org.description}</p>
              )}
              <ul className="mt-3 space-y-1 text-sm text-white/80">
                {org.bullets.map((bullet) => (
                  <li key={bullet}>• {bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold">
          {locale === "ja" ? "修了講座" : "Certificates"}
        </h3>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {certificates.map((cert) => (
            <div key={cert.id} className="rounded-3xl border border-white/10 bg-white/[0.03] p-4">
              <div className="relative mb-3 h-40 w-full overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src={cert.image}
                  alt={cert.title[locale]}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
              <h4 className="text-lg font-semibold text-white">{cert.title[locale]}</h4>
              <p className="mt-1 text-sm text-white/75">{cert.description[locale]}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
