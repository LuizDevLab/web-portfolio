import { BookOpen, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Sobre <span className="text-primary ">mim</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center ">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              🚀 Apaixonado por Desenvolvimento Web
            </h3>

            <p className="text-muted-foreground">
              Sempre direcionei meus estudos e dedicação para o desenvolvimento
              web, área pela qual tenho grande interesse e na qual busco
              constante evolução.
            </p>

            <p className="text-muted-foreground">
              Sou estudante do 3º ano de Ciência da Computação, tenho 20 anos e
              sempre fui apaixonado por tecnologia. Direcionei meus estudos para
              o desenvolvimento web, com foco em backend e conhecimento também
              em frontend. Busco constantemente evoluir minhas habilidades e
              aplicar soluções que unam qualidade e inovação.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-bottom">
                Entre em contato
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Baixar curriculo
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Web development</h4>
                  <p className="text-muted-foreground">Criação de aplicações web modernas, escaláveis e de alta performance.</p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Fullstack dev</h4>
                  <p className="text-muted-foreground">Conhecimento em backend e frontend, integrando soluções completas.</p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <BookOpen className="h-6 w-6 text-primary" />
                  
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg"> Aprendizado Contínuo </h4>
                    <p className="text-muted-foreground">Sempre em evolução, acompanhando tendências e novas tecnologias</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
