import { Card, CardContent } from "@/components/ui/card";

const CERTIFICATIONS = [
  "Accenture Developer and Technology – By Accenture",
  "Cybersecurity Virtual Internship – By Eduskills",
  "Python Web Development Pro – By Udemy",
  "Learning HTML and CSS – By Infosys Springboard",
  "Basics of Database Design and Development – By Udemy",
  "Database Management System – By Udemy"
];

export default function CertificationsSection() {
  return (
    <section className="py-10" id="certifications">
      <h2 className="text-3xl font-bold mb-8">Certifications</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {CERTIFICATIONS.map((cert, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <p className="font-medium">{cert}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
