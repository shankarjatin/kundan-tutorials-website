"use client"

import { motion } from "framer-motion"
import { Code, Database, FileCode, FileType, Layers, Terminal, BookOpen, Globe } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"

export default function SubjectsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const subjects = [
    {
      title: "C Programming",
      description: "Learn fundamental programming concepts with C language basics and syntax.",
      icon: <Terminal className="h-10 w-10" />,
      color: "bg-blue-500/10 text-blue-500",
      hoverColor: "bg-blue-500/20",
      borderColor: "border-blue-500/50",
    },
    {
      title: "Python",
      description: "Master Python programming with hands-on projects and real-world applications.",
      icon: <FileCode className="h-10 w-10" />,
      color: "bg-yellow-500/10 text-yellow-500",
      hoverColor: "bg-yellow-500/20",
      borderColor: "border-yellow-500/50",
    },
    {
      title: "C++",
      description: "Learn object-oriented programming and advanced concepts with C++.",
      icon: <Code className="h-10 w-10" />,
      color: "bg-purple-500/10 text-purple-500",
      hoverColor: "bg-purple-500/20",
      borderColor: "border-purple-500/50",
    },
    {
      title: "Java",
      description: "Build strong foundation in Java programming for desktop and web applications.",
      icon: <FileType className="h-10 w-10" />,
      color: "bg-orange-500/10 text-orange-500",
      hoverColor: "bg-orange-500/20",
      borderColor: "border-orange-500/50",
    },
    {
      title: "Web Development",
      description: "Learn HTML, CSS, JavaScript and modern web frameworks to build interactive websites.",
      icon: <Globe className="h-10 w-10" />,
      color: "bg-emerald-500/10 text-emerald-500",
      hoverColor: "bg-emerald-500/20",
      borderColor: "border-emerald-500/50",
    },
    {
      title: "Data Structures",
      description: "Understand arrays, linked lists, stacks, queues, trees, and basic algorithms.",
      icon: <Database className="h-10 w-10" />,
      color: "bg-green-500/10 text-green-500",
      hoverColor: "bg-green-500/20",
      borderColor: "border-green-500/50",
    },
    {
      title: "Logic Building",
      description: "Develop problem-solving skills through puzzles, challenges, and competitive programming.",
      icon: <Layers className="h-10 w-10" />,
      color: "bg-pink-500/10 text-pink-500",
      hoverColor: "bg-pink-500/20",
      borderColor: "border-pink-500/50",
    },
    {
      title: "CBSE/ICSE Syllabus",
      description: "Complete coverage of school board curriculum with exam-focused preparation.",
      icon: <BookOpen className="h-10 w-10" />,
      color: "bg-cyan-500/10 text-cyan-500",
      hoverColor: "bg-cyan-500/20",
      borderColor: "border-cyan-500/50",
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
    <section id="subjects" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Programming Languages & Subjects Covered</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive curriculum covering C, C++, Java, Python and many more programming languages with strong Computer Science foundations
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 sm:gap-10"
        >
          {subjects.map((subject, index) => (
            <motion.div
              key={index}
              variants={item}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Card
                className={`h-full border-2 transition-all duration-300 hover:shadow-xl ${
                  hoveredIndex === index
                    ? `${subject.borderColor} shadow-2xl scale-105`
                    : "border-border hover:border-primary/30"
                }`}
              >
                <CardContent className="p-6 sm:p-8 flex flex-col h-full text-center">
                  <motion.div
                    className={`rounded-full p-4 w-fit mb-6 mx-auto ${subject.color} transition-all duration-300`}
                    animate={hoveredIndex === index ? { scale: [1, 1.1, 1] } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    {subject.icon}
                  </motion.div>
                  <h3 className="text-lg sm:text-xl font-bold mb-4 text-foreground">{subject.title}</h3>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed flex-grow">{subject.description}</p>

                  {/* Interactive element on hover */}
                  <motion.div
                    className="mt-6 pt-4 border-t border-border/50 text-sm hidden sm:flex items-center justify-center opacity-0"
                    animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  >
                    <span className="text-primary font-medium">Learn more →</span>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}