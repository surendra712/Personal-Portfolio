import { Card, CardContent } from "@/components/ui/card";
import SocialLinks from "./social-links";

export default function HeroSection() {
  return (
    <section className="min-h-[90vh] flex items-center" id="home">
      <Card className="w-full bg-background/60 backdrop-blur-sm border-none shadow-xl">
        <CardContent className="p-8 space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Surendra Alla
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            I'm a passionate software developer with expertise in Python, Java, and web technologies.
            Currently exploring the realms of Machine Learning and Artificial Intelligence.
          </p>
          <SocialLinks className="pt-4" />
        </CardContent>
      </Card>
    </section>
  );
}
