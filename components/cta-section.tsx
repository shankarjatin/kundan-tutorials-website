"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CtaSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-2xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-purple-600/90 z-0"></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-10 z-0"></div>

          <div className="relative z-10 py-12 md:py-16 px-6 md:px-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Start Learning Today</h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8">
              Take the first step towards mastering Computer Science with a personalized learning experience. Book a
              free trial class and see the difference for yourself!
            </p>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 group"
              onClick={() => window.location.href = 'mailto:saritaverma2222@gmail.com@gmail.com?subject=Free Trial Class Request&body=Hi, I would like to book a free trial class for computer science tutoring. Please let me know your availability.'}
            >
              Book Free Trial Class
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
