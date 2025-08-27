import {
  Facebook,
  Instagram,
  Linkedin,
  LinkedinIcon,
  Mail,
  Phone,
  Send,
  Twitch,
  Twitter,
} from "lucide-react";

import { cn } from "@/lib/utils";

export const ContactSection = () => {

  const handleSubmit = (e) => {
    e.prevent.default()

    setTimeout(() => {
      
    }, 1500);
  }

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Entre em <span className="text-primary">contato</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-11">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              Informações para contato
            </h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:luizhenrique19132@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    luizhenrique@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Telefone</h4>
                  <a
                    href="tel:+5583987966691"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +55 (83) 98796-6691
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Linkedin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Linkedin</h4>
                  <a
                    href="https://www.linkedin.com/in/luiz-henrique-b0a1ba1a2/"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    perfil do linkedin
                  </a>
                </div>
              </div>
            </div>
            <div className="pt-8">
              <h4 className="font-medium mb-4 ">Connect with me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="#" target="_blank">
                  <Instagram />
                </a>
                <a href="#" target="_blank">
                  <Twitch />
                </a>
                <a href="#" target="_blank">
                  <Twitter />
                </a>
                <a href="#" target="_blank">
                  <Facebook />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Envie uma mensagem</h3>

            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Seu nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-iput bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Luiz Henrique..."
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Seu email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-iput bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="luiz@..."
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Sua mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-iput bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Olá, gostaria de falar sobre..."
                />
              </div>

              <button
                type="submit"
                className={cn(
                  "cosmic-bottom w-full flex items-center justify-center gap-2",

                )}
              >
                Enviar mensagem
                <Send size={16}/>

              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
