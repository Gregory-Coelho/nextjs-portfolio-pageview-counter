import { Project } from "../interfaces/project";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

// crée un chemin vers le répertoire posts
const projectDirectory = join(process.cwd(), "_projects");

// lit le contenu du répertoire des articles et renvoi une liste de slugs
export const getProjectSlugs = () => {
  return fs.readdirSync(projectDirectory);
};

// prend un slug en paramètre et récup le contenu de l'article
// créer un chemin vers le fichier Markdown en utilisant le slug
// lit le contenu du fichier avec fs.readFileSync (que je comprend pas)
// Le contenu du fichier est ensuite analysé avec matter pour extraire les métadonnées et le contenu de l'article.

export const getPostBySlug = (slug: string) => {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(projectDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data } = matter(fileContents);
  // les méta données et le contenu de l'article sont renvoyés sous forme d'objet Post
  return { ...data, slug: realSlug } as Project;
};

// Recup tout les slugs grace a getPostSlugs.
// map les slugs, et pour chaque slugs elle récupère le contenu de l'article
// ensuite trie les articles par date
export const getAllProjects = (): Project[] => {
  const slugs = getProjectSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
};
