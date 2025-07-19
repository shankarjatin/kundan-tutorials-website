"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Ranju Kumari",
      role: "Student",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "Great coaching for learning computers! The teaching is clear, practical, and easy to follow. Helpful teachers, good environment, and hands-on practice. Perfect for beginners and students. Highly recommended!",
      stars: 5,
      time: "2 weeks ago",
    },
    {
      name: "Vishnu Upadhyay",
      role: "Student",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "It was a wonderful learning experience with ma'am, her way of teaching is most unique and Joyous. If you really want to learn something new, I am damn sure you will achieve something great. Highly Recommended Kundan Tutorials.",
      stars: 5,
      time: "a year ago",
    },
    {
      name: "Deepa Kumari",
      role: "Student",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "Her teaching techniques are so good. And she is very polite in nature so you can ask any question again and again without any hesitation. My overall experience was so good. I highly recommend to join Kundan tutorials.",
      stars: 5,
      time: "a year ago",
    },
    {
      name: "Swati Kumari",
      role: "Student",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "The teacher's engaging style and dedication to student success make learning enjoyable. Clear explanations and approachability create a supportive learning environment.",
      stars: 5,
      time: "a year ago",
    },
    {
      name: "Kunal Kr",
      role: "Student",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "The teaching environment is ossm there and mam explains every topic or question in a very easy way. I have cleared many doubts of mine, thankyou! I think you should also take a trial class if you are preparing for something.",
      stars: 5,
      time: "a year ago",
    },
    {
      name: "Alena Rafi",
      role: "Student",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "The environment is very friendly as well as the teaching method. I highly recommend every student to join Kundan Tutorials for the betterment of understanding and scoring high.",
      stars: 5,
      time: "2 years ago",
    },
    {
      name: "Mohit Chouhan",
      role: "Local Guide",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "Teacher has vast experience and in-depth knowledge of C, C++, and Python. Loved Their Teachings Method. Overall, the best coaching for CS.",
      stars: 5,
      time: "2 years ago",
    },
    {
      name: "Ishita Moorjani",
      role: "Student",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "Mam explains concepts very well. You can ask her things end number of times and your doubt will get resolved. Thank You Kundan Tutorials for helping me become a good coder.",
      stars: 5,
      time: "2 years ago",
    },
    {
      name: "c0ugarsec",
      role: "Student",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "Well these classes are rare. Dont waste time in going here and there, directly get in it. It's worth it. She has a great scholastic and as well as practical approach.",
      stars: 5,
      time: "2 years ago",
    },
  ]

  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const totalTestimonials = testimonials.length

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (autoplay) {
      interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % totalTestimonials)
      }, 5000)
    }
    return () => clearInterval(interval)
  }, [autoplay, totalTestimonials])

  const next = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev + 1) % totalTestimonials)
  }

  const prev = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev - 1 + totalTestimonials) % totalTestimonials)
  }

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Students Say</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Genuine reviews from our students about their learning experiences at Kundan Tutorials
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="border border-border bg-card/50 shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-6 md:p-8">
                      <div className="flex flex-col md:flex-row gap-6 items-start">
                        <div className="flex-shrink-0">
                          <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-primary bg-muted flex items-center justify-center">
                            <span className="text-2xl font-bold text-primary">
                              {testimonial.name.charAt(0)}
                            </span>
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center mb-2">
                            {[...Array(testimonial.stars)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                            ))}
                          </div>
                          <p className="text-lg mb-4 italic">"{testimonial.content}"</p>
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-semibold">{testimonial.name}</h4>
                              <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                            </div>
                            <span className="text-xs text-muted-foreground">{testimonial.time}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setAutoplay(false)
                  setCurrent(index)
                }}
                className={`w-3 h-3 rounded-full transition-colors ${
                  current === index ? "bg-primary" : "bg-muted-foreground/30"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-background/80 backdrop-blur-sm shadow-lg pointer-events-auto hover:bg-background/90"
              onClick={prev}
            >
              <ChevronLeft className="h-6 w-6" />
              <span className="sr-only">Previous testimonial</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-background/80 backdrop-blur-sm shadow-lg pointer-events-auto hover:bg-background/90"
              onClick={next}
            >
              <ChevronRight className="h-6 w-6" />
              <span className="sr-only">Next testimonial</span>
            </Button>
          </div>
        </div>
        
   <div className="text-center mt-12">
  <motion.div
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
  >
    <Button 
      className="bg-gradient-to-r from-primary to-purple-500 hover:opacity-90"
      onClick={() => window.open("https://www.google.com/search?sca_esv=45c8bf4228d081b3&rlz=1C1CHBF_enIN1119IN1119&sxsrf=AE3TifN8qxSX-AmCuqgtkDcgvO7hVd5i5A:1749762082558&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E6CJgRkqELXYe-BVTOeih3EjHfWe8RtBX5JHpZKl8mrb6aSb8sJ0DjFF6yZ0zsgK2s8xFta0WLXYPbo8-_G4oEmhGTAxkzD_7QFs5Uy53DbLwPYkww5B8TYVPJ2hOdzeBecYEiHjQynE1d3PvMra_IZSHpI5&q=Kundan+Tutorials+-+Computer+Training+Institute+in+Vaishali+Reviews&sa=X&ved=2ahUKEwjfif3a4-yNAxVfZWwGHQnJJuwQ0bkNegQIJhAD&biw=1536&bih=695&dpr=1.25", "_blank")}
    >
      See All Google Reviews
    </Button>
  </motion.div>
</div>
      </div>
    </section>
  )
}