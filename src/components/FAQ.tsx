import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What is Grovia?",
      answer: "Grovia is a cooperative fintech platform that offers savings, loans, virtual cards, thrift contribution groups (\"Ajo\"), and business resources—all powered by technology and owned by its members."
    },
    {
      question: "What do I need to sign up on Grovia?",
      answer: "You need a valid phone number, basic personal information, and a means of identification for verification. The sign-up process is quick and easy through our mobile app or web platform."
    },
    {
      question: "Can I access loans without savings?",
      answer: "Loans on Grovia are typically tied to your savings and contribution history within the cooperative. However, we offer flexible loan products based on your capacity and engagement with the platform."
    }
  ];

  return (
    <section className="bg-gradient-dark py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Button variant="pill" size="pill" className="mb-6">
            FAQs
          </Button>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Find answers to your burning question
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Get quick answers to common questions about Grovia's services and features
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-grovia-forest border border-grovia-primary/20 rounded-lg px-6"
              >
                <AccordionTrigger className="text-white hover:text-grovia-primary transition-colors py-6 text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-text-secondary pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;