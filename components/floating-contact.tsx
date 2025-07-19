"use client"

import { useState } from "react"
import { MessageCircle, X, Phone, Mail, Calendar } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            className="mb-4 bg-card border border-border rounded-lg shadow-lg p-3 w-56 sm:w-64 max-w-[90vw]"
          >
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-semibold text-sm">Contact Me</h3>
              <Button variant="ghost" size="sm" className="h-6 w-6 p-0" onClick={() => setIsOpen(false)}>
                <X className="h-3 w-3" />
              </Button>
            </div>

            <div className="space-y-2">
              <a
                href="tel:+919711209441"
                className="flex items-center gap-2 p-2 hover:bg-muted rounded-md transition-colors"
              >
                <div className="bg-primary/10 text-primary p-1.5 rounded-full shrink-0">
                  <Phone className="h-3 w-3" />
                </div>
                <span className="text-xs truncate">+91-9711209441</span>
              </a>

              <a
                href="mailto:saritaverma2222@gmail.com?subject=Inquiry about Computer Science Tutoring&body=Hi, I would like to know more about your tutoring services."
                className="flex items-center gap-2 p-2 hover:bg-muted rounded-md transition-colors"
              >
                <div className="bg-blue-500/10 text-blue-500 p-1.5 rounded-full shrink-0">
                  <Mail className="h-3 w-3" />
                </div>
                <span className="text-xs truncate">saritaverma2222@gmail.com</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gradient-to-r from-primary to-purple-500 text-white rounded-full p-4 shadow-lg flex items-center justify-center"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </motion.button>
    </div>
  )
}
