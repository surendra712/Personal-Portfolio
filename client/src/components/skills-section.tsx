import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SKILLS = [
  "Python", "Java", "C", "HTML", "CSS", "JavaScript", 
  "SQL", "MySQL", "PostgreSQL", "React",
  "Machine Learning", "Artificial Intelligence",
  "GitHub", "AWS", "VS Code"
];

export default function SkillsSection() {
  return (
    <section className="py-10" id="skills">
      <h2 className="text-3xl font-bold mb-8">Skills</h2>
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-wrap gap-2">
            {SKILLS.map((skill) => (
              <Badge 
                key={skill}
                variant="secondary" 
                className="text-sm py-2 px-4 transition-all hover:scale-105"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
