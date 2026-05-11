import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProject } from "@/lib/projects";
import { CarriesLanding } from "@/components/projects/carries/CarriesLanding";

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project?.liveDemoPath) return {};
  return {
    title: `${project.name} — Live preview`,
    description: project.tagline,
  };
}

export default async function LiveDemoPage({ params }: { params: Params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project?.liveDemoPath) notFound();

  switch (slug) {
    case "carries":
      return <CarriesLanding />;
    default:
      notFound();
  }
}
