"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ContactSection() {
  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      content: "+91-9711209441",
      action: "tel:+919711209441",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      content: "saritaverma2222@gmail.com",
      action: "mailto:saritaverma2222@gmail.com?subject=Inquiry about Computer Science Tutoring&body=Hi, I would like to know more about your tutoring services.",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Address",
      content: "303, Alaknanda Apartments, near Vaishali metro station, Sector 4, Vaishali, Ghaziabad, Uttar Pradesh 201010",
      action: "https://www.google.com/maps/search/Alaknanda+Apartments+Vaishali+Ghaziabad",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Teaching Hours",
      content: "Mon-Fri: 3:00 PM - 7:00 PM\nSat-Sun: 10:00 AM - 7:00 PM",
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-purple-500/5 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to start your coding journey? Contact us today to book a free demo class or ask any questions
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {contactInfo.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 border border-border/50 hover:border-primary/30">
                <CardContent className="p-3 sm:p-6 text-center">
                  <div className={`${item.bgColor} ${item.color} w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4`}>
                    <div className="h-4 w-4 sm:h-6 sm:w-6">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground whitespace-pre-line leading-tight">{item.content}</p>
                  {item.action && (
                    <div className="mt-3 sm:mt-4">
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="hover:bg-primary/10 hover:border-primary text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2"
                      >
                        <a
                          href={item.action}
                          target={item.action.startsWith('http') ? '_blank' : '_self'}
                          rel={item.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          Contact
                        </a>
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Learning?</h3>
            <p className="text-muted-foreground mb-6">
              Book your free demo class today and experience our unique teaching approach
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-purple-500 hover:opacity-90"
                asChild
              >
                <a href="tel:+919711209441">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/30 hover:border-primary hover:bg-primary/10"
                asChild
              >
                <a href="https://wa.me/919711209441" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
