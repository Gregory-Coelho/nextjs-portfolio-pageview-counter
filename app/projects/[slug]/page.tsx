import { notFound } from "next/navigation";
import { allProjects } from "contentlayer/generated";
import { md } from "@/app/components/md";
import { Header } from "./header";
import "./md.css";
import { ReportView } from "./view";

export const revalidate = 60;

type Props = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams(): Promise<Props["params"][]> {
  return allProjects
    .filter((p) => p.published)
    .map((p) => ({
      slug: p?.slug,
    }));
}

export default async function PostPage({ params }: Props) {
  const slug = params??.slug;
  const project = allProjects.find((project) => project?.slug === slug);

  if (!project) {
    notFound();
  }
}
