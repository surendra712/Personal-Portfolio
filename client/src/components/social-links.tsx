import { Github, Linkedin, Instagram, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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

export default function SocialLinks({ className }: { className?: string }) {
  return (
    <div className={cn("flex gap-2", className)}>
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
  );
}
