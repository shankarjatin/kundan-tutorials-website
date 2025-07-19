"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Trophy, BookOpen, Clock, ThumbsUp, Instagram } from "lucide-react"

export default function TrustBadges() {
  const stats = [
    {
      value: "500+",
      label: "Students Taught",
      icon: <Users className="h-6 w-6" />,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      value: "98%",
      label: "Success Rate",
      icon: <ThumbsUp className="h-6 w-6" />,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      value: "15+",
      label: "Olympiad Winners",
      icon: <Trophy className="h-6 w-6" />,
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
    },
    {
      value: "20+",
      label: "Years Experience",
      icon: <Clock className="h-6 w-6" />,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
    {
      value: "100%",
      label: "Board Exam Success",
      icon: <Award className="h-6 w-6" />,
      color: "text-pink-500",
      bgColor: "bg-pink-500/10",
    },
    {
      value: "7+",
      label: "Programming Languages",
      icon: <BookOpen className="h-6 w-6" />,
      color: "text-cyan-500",
      bgColor: "bg-cyan-500/10",
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
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Students Trust Us</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our track record speaks for itself - join hundreds of successful students
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {stats.map((stat, index) => (
            <motion.div key={index} variants={item}>
              <Card className="border border-border hover:border-primary/30 transition-all duration-300 h-full">
                <CardContent className="p-6 flex flex-col items-center justify-center text-center h-full">
                  <div className={`${stat.bgColor} ${stat.color} p-3 rounded-full mb-4`}>{stat.icon}</div>
                  <div className={`text-3xl font-bold mb-1 ${stat.color}`}>{stat.value}</div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured In Section */}
        <div className="mt-16">
          <p className="text-center text-sm text-muted-foreground mb-8">FOLLOW US ON</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            <a 
              href="https://www.facebook.com/share/19xrK37G13/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span className="text-sm font-medium">Facebook</span>
            </a>
            <a 
              href="https://www.instagram.com/kundan_tutorials?igsh=eG92c241eXJhbGcy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded hover:from-purple-600 hover:to-pink-600 transition-all"
            >
           <Instagram size={20} />
              <span className="text-sm font-medium">Instagram</span>
            </a>
            <a 
              href="https://m.youtube.com/@kundantutorials4929" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              <span className="text-sm font-medium">YouTube</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
