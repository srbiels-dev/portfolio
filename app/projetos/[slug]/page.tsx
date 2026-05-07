import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { ProjectContent } from "@/components/projects/ProjectContent";
import { getProject, projects } from "@/lib/projects";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.name} — Baius Design`,
    description: project.tagline,
  };
}

export default async function ProjectPage({ params }: { params: Params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <>
      <Navbar />
      <main className="pt-[60px]">
        <div className="px-6 md:px-10 pt-8">
          <Link
            href="/#projetos"
            className="font-mono text-text-secondary text-[14px] hover:text-text transition-colors"
          >
            ← voltar
          </Link>
        </div>
        <ProjectContent project={project} />
      </main>
      <Footer />
    </>
  );
}
