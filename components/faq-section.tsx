"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FaqSection() {
  const faqs = [
    {
      question: "What age groups do you teach?",
      answer:
        "I teach students from age 6 to college level. This includes elementary students, middle school, high school (classes 6-12), and college students. The curriculum is tailored to match each student's age group, grade level, and learning pace.",
    },

    {
      question: "What is the duration of each class?",
      answer:
        "Each class is typically 1 hour long. Depending on the topic and student's needs, some sessions might extend to 1.5 hours, especially for complex topics or project work.",
    },
    {
      question: "Do you provide study materials?",
      answer:
        "Yes, comprehensive study materials are provided, including notes, practice problems, code examples, and reference materials. All resources are shared digitally for easy access.",
    },
    {
      question: "How do you track student progress?",
      answer:
        "Progress is tracked through regular assessments, coding challenges, and projects. Monthly progress reports are shared with parents, highlighting strengths and areas for improvement.",
    },
    {
      question: "Can I book a trial class before committing?",
      answer:
        "I offer a free 30-minute demo class to understand the student's needs and demonstrate my teaching approach. This helps ensure we're a good fit before committing to regular classes.",
    },
    {
      question: "Do you help with school assignments and projects?",
      answer:
        "Yes, I provide guidance on school assignments and projects. However, I focus on helping students understand concepts rather than simply completing their work for them.",
    },
  
  ]

  return (
    <section id="faq" className="py-16 md:py-24 bg-muted/30 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about my tutoring services
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-border">
                <AccordionTrigger className="text-left hover:text-primary transition-colors py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">Still have questions? Feel free to reach out directly.</p>
          <a href="#contact" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors">
            Contact me
            <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
