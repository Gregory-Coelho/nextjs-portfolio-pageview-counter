"use client";
import Link from "next/link";
import { Card } from "../components/card";
import { Navigation } from "../components/nav";

const skills = [
  {
    icon: <img src="" />,
    key: "Hello",
    href: "",
    label: "Hello",
  },
  {
    icon: <img src="" />,
    key: "Hello",
    href: "",
    label: "Hello",
  },
  {
    icon: <img src="" />,
    key: "Hello",
    href: "",
    label: "Hello",
  },
  {
    icon: <img src="" />,
    key: "Hello",
    href: "",
    label: "Hello",
  },
  {
    icon: <img src="" />,
    key: "Hello",
    href: "",
    label: "Hello",
  },
  {
    icon: <img src="" />,
    key: "Hello",
    href: "",
    label: "Hello",
  },
  {
    icon: <img src="" />,
    key: "Hello",
    href: "",
    label: "Hello",
  },
];

export default function SkillsPage() {
  return (
    <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />

      <div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
        <div className="flex flex-col justify-between ">
          <h2 className="text-3xl m-4 font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Skills
          </h2>
          <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-4 sm:mt-0 sm:grid-cols-3 lg:gap-16 ">
            {skills.map((s) => (
              <Card key={s.key}>
                <Link
                  href={s.href}
                  className="flex p-2 items-center content-between gap-4"
                >
                  <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
                    {s.icon}
                  </span>
                  <h3 className="text-white"> {s.label}</h3>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
