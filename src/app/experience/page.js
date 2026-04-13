import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";

export default function Experience() {
  const experiences = [
    {
      title: "Programmer - Fullstack Web Developer",
      description: "Kementerian Pekerjaan Umum  || (Apr 2025 - Des 2025)",
      jobdesc: [
        "Developed core modules of E-Kinerja web app (PHP Native, jQuery, MySQL) for SKP (employee performance system)",
        " Enhanced SKP Evaluation & RHK modules with new rating logic, improving usability for >1,000 employees.",
        "Integrated e-HRM API with fallback logic and automated logging for reliable synchronization",
        "Improved system performance by fixing critical bugs, optimizing XHR, and implementing caching & CRON jobs",
      ],
    },
    {
      title: "Fullstack Web Developer",
      description: "PT Godigi Prima Satya || Des 2024 - Mar 2025",
      jobdesc: [
        "Built scalable APIs with Go & PostgreSQL for backend web apps",
        "Optimized queries & improved authentication security, and build CRUD for mapping the residence and house member",
        "Build Frontend side, including home, residence list, member list and monthly tax management in Morizen.",
      ],
    },
    {
      title: "IT Support & Quality Control",
      description: "PT Tiga Griya Wibawa || Okt 2024 - Nov 2024",
      jobdesc: [
        "Conduct application training for +500 Facilitator or Surveyor directly by onsite, starts from installation, introduction and app usage",
        "Ensure that the Facilitator able to use the application by taking role as a Help Desk Staff",
        "Assist the facilitator when the application disable to use by doing basic troubleshooting or follow up the upper level",
        "Check the data over 800 from Facilitator during the survey agenda or Homevisit to make sure that the data quality is clearly valid",
      ],
    },
    {
      title: "Customer First Squad",
      description: "IGT Solutions || Sep 2023 - Apr 2024",
      jobdesc: [
        "Receiving and addressing customer complaints submitted via ticketing and CRM chat platforms, with a daily target of resolving 60 tickets or chats by providing appropriate information or resolutions",
        "Initiating outbound calls as necessary, especially in cases of escalated or significant customer dissatisfaction, to effectively communicate information or resolutions previously provided",
        "Ensuring the seamless operation of the ticketing, chat, and call processes, strictly adhering to the Standard Operating Procedures (SOP) established by both the company and the client, with zero tolerance for deviations",
        "Participating in weekly coaching or evaluation sessions aimed at assessing and enhancing performance metrics",
      ],
    },
    {
      title: "Customer Success Specialist",
      description: "Teleperformance || Jul 2022 - Jul 2023",
      jobdesc: [
        "Respond to over 5000 incoming chats and more than 1000 in-app emails from users, addressing a diverse range of issues and inquiries, in adherence to standard operating procedures (SOP)",
        "Promptly escalate customer inquiries to the authorized team or relevant division when necessitated by the complexity or urgency of the issue",
        "Generate daily reports summarizing resolved customer inquiries, incorporating internal remarks for documentation purposes",
        "Maintain adherence to SOP guidelines to ensure the accuracy and appropriateness of information provided to customers",
      ],
    },
    {
      title: "Governance Bureau Intern",
      description: "Kantor Gubernur DI Yogyakarta || Des 2021",
      jobdesc: [
        "Assist in village administration by recheck the daily report due to Vaccination process in DI Yogyakarta and Governance Bureau's staff travel documents",
        "Participate in the Sosialisasi Kelembagaan Asli agenda from the Bureau of Governance as Operator",
      ],
    },
  ];

  return (
    <>
      <Container className="py-16 space-y-16 flex flex-col gap-4">
        <Section className="flex flex-col gap-4 md:flex-row md:overflow-x-scroll md:overflow-y-hidden scroll-smooth">
          {experiences.map((item) => (
            <Card
              key={item.title}
              title={item.title}
              description={item.description}
              className="max-w-sm mx-auto"
            >
              {item.jobdesc.map((jobItem, index) => (
                <p key={index} className="text-sm">
                  {index + 1}. {jobItem}
                </p>
              ))}
            </Card>
          ))}
        </Section>
      </Container>
    </>
  );
}
