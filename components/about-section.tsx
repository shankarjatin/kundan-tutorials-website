"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import dp from '../assets/dp2.jpg'
export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About the Tutor</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Dedicated to helping students excel in Computer Science through personalized learning experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
  <div className="relative z-10 rounded-lg overflow-hidden shadow-xl max-w-md mx-auto lg:max-w-none">
  <Image
    src={dp}
    alt="Computer Science Tutor - Sarita Verma"
    className="w-full h-auto object-cover "
    width={300}
    height={400}
    priority
    style={{ maxHeight: "400px" }}
  />
</div>
            <div className="absolute -z-10 -bottom-6 -left-6 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold">
              Hi, I'm <span className="text-primary">Sarita Verma</span>
            </h3>
            <p className="text-muted-foreground">
              With over 20+ years of experience teaching Computer Science, I'm passionate about making complex programming concepts simple and engaging. My teaching approach focuses on building strong fundamentals while keeping learning interactive and practical. As the current HOD of Computer Science at Indus Valley Public School, I bring both academic expertise and real-world relevance to my tutorials.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="bg-card/50 border border-border">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 text-primary">
                      <CheckCircle size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium">MTech in Computer Science</h4>
                      <p className="text-sm text-muted-foreground">Advanced academic qualification</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border border-border">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 text-primary">
                      <CheckCircle size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium">20+ Years Experience</h4>
                      <p className="text-sm text-muted-foreground">Teaching students of all levels</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border border-border">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 text-primary">
                      <CheckCircle size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium">HOD Computer Science</h4>
                      <p className="text-sm text-muted-foreground">Indus Valley Public School</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border border-border">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 text-primary">
                      <CheckCircle size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium">Specialized in C++, Python</h4>
                      <p className="text-sm text-muted-foreground">And CS exam preparation</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}