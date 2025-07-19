"use client"

import { motion } from "framer-motion"
import { Users, Award, Code2, ClipboardCheck, Rocket, Brain } from "lucide-react"

export default function FeaturesSection() {
  const features = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "One-on-one Guidance",
      description:
        "Personalized attention and customized learning path for each student based on their pace and learning style.",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Board Exam Preparation",
      description: "Structured curriculum aligned with CBSE, ICSE, and State board requirements for excellent results.",
    },
    {
      icon: <Code2 className="h-8 w-8" />,
      title: "Live Interactive Coding",
      description: "Real-time coding sessions where students can practice and get immediate feedback.",
    },
    {
      icon: <ClipboardCheck className="h-8 w-8" />,
      title: "Assignments & Feedback",
      description: "Regular assignments with detailed feedback to track progress and improve understanding.",
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Fun Projects & Challenges",
      description: "Engaging projects that make learning enjoyable while building practical skills.",
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Olympiad Training",
      description: "Specialized coaching for national and international Computer Science olympiads.",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="features" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Me?</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My teaching approach is designed to make learning Computer Science engaging, effective, and enjoyable
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:border-primary/50 transition-all duration-300"
            >
              <div className="bg-primary/10 text-primary rounded-full p-3 w-fit mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
