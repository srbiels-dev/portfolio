import { notFound } from "next/navigation";
import { Drawer } from "@/components/projects/Drawer";
import { ProjectContent } from "@/components/projects/ProjectContent";
import { getProject } from "@/lib/projects";

type Params = Promise<{ slug: string }>;

export default async function InterceptedProjectPage({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <Drawer>
      <ProjectContent project={project} />
    </Drawer>
  );
}
