import { ArrowRight, ExternalLinkIcon, GithubIcon } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Saas Landing page",
    description: "A beautiful landing page app using react and tailwind.",
    image: "/projects/project1.png",
    tags: ["React", "Tailwind", "Supabase"],
    demoUrl: "#",
    githubUrl: "#",
  },

  {
    id: 2,
    title: "CSS Battle",
    description: "make practicing CSS more fun dnwiwiddnwnidnwi.",
    image: "/projects/project2.png",
    tags: ["Typescript", "Vue"],
    demoUrl: "#",
    githubUrl: "#",
  },

  {
    id: 3,
    title: "Daily UI",
    description: "Practice your frontend skills qd2dqqdqwwdqwdwfqfw.",
    image: "/projects/project2.png",
    tags: ["Scss", "Next.js"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-24 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          <span className="text-primary">Projetos </span>em destaque{" "}
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Esses são meus projetos em que mais tenho orgulho de ter participado e
          criado. Com eles pude pôr em prática tudo aquilo que estudei.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((projects, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden ">
                <img
                  src={projects.image}
                  alt={projects.title}
                  className="w-full h-full objective-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {projects.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">
                  {" "}
                  {projects.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {projects.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={projects.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      {" "}
                      <ExternalLinkIcon size={20} />
                    </a>
                    <a
                      href={projects.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      {" "}
                      <GithubIcon size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a className="cosmic-bottom w-fit flex items-center mx-auto" target="_blank gap-2" href="https://github.com/LuizDevLab" >
            Dê uma olhada no meu Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
