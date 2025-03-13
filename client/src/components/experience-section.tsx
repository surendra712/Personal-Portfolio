import { Card, CardContent } from "@/components/ui/card";

export default function ExperienceSection() {
  return (
    <section className="py-10" id="experience">
      <h2 className="text-3xl font-bold mb-8">Work Experience</h2>
      <Card>
        <CardContent className="p-6 space-y-6">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">
              Accenture UK Developer and Technology Virtual Experience Programme
            </h3>
            <p className="text-muted-foreground">March 2025</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Completed the Developer and Technology Job Simulation</li>
              <li>Conducted research into emerging technology trends, particularly in DevOps</li>
              <li>Created and delivered a PowerPoint presentation analyzing Waterfall and Agile methodologies</li>
              <li>Designed custom algorithms using pseudocode and flow diagrams</li>
              <li>Debugged Python programs, fixing syntax and logic errors</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
