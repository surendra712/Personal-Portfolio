import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Instagram, Mail, Phone } from "lucide-react";

const SOCIAL_LINKS = [
  {
    icon: Github,
    href: "https://github.com/surendra712",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/alla-surendra-4205702ba/",
    label: "LinkedIn",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/silent_lover_sunny_143/",
    label: "Instagram",
  },
  {
    icon: Mail,
    href: "mailto:allasurendra123@gmail.com",
    label: "Email",
  },
  {
    icon: Phone,
    href: "tel:+917287056345",
    label: "Phone",
  },
];

export default function HeroSection() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center" id="home">
      <Card className="w-full max-w-4xl bg-background/60 backdrop-blur-sm border shadow-xl">
        <CardContent className="p-8 space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Surendra Alla
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            I'm a passionate software developer with expertise in Python, Java, and web technologies.
            Currently exploring the realms of Machine Learning and Artificial Intelligence.
          </p>
          <div className="flex flex-wrap gap-3 pt-4">
            {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
              <Button
                key={href}
                variant="ghost"
                size="icon"
                asChild
                className="hover:scale-110 transition-transform"
              >
                <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                  <Icon className="h-5 w-5" />
                </a>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}