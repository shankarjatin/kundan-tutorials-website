"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronDown, Star, Sparkles, Clock, MapPin, Phone } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

export default function HeroSection() {
  const [text, setText] = useState("")
  const [index, setIndex] = useState(0)
  const [cursorVisible, setCursorVisible] = useState(true)
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  const codeExample = `// Kundan Tutorials Sample Code
// Python Example
def calculate_grade(score):
    if score >= 90:
        return "A"
    elif score >= 80:
        return "B"
    elif score >= 70:
        return "C"
    elif score >= 60:
        return "D"
    else:
        return "F"

# C++ Example
/* 
int main() {
    int score = 95;
    char grade = 'F';
    
    if (score >= 90) grade = 'A';
    else if (score >= 80) grade = 'B';
    else if (score >= 70) grade = 'C';
    else if (score >= 60) grade = 'D';
    
    cout << "Grade: " << grade << endl;
    return 0;
}
*/`

  useEffect(() => {
    if (index < codeExample.length) {
      const timeout = setTimeout(() => {
        setText(text + codeExample[index])
        setIndex(index + 1)
      }, 30)
      return () => clearTimeout(timeout)
    }
  }, [index, text])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev)
    }, 500)
    return () => clearInterval(cursorInterval)
  }, [])

  const floatingIcons = [
    { icon: "C++", x: "10%", y: "20%", size: "text-xl", delay: 0 },
    { icon: "{ }", x: "85%", y: "15%", size: "text-2xl", delay: 0.2 },
    { icon: "py", x: "75%", y: "80%", size: "text-lg", delay: 0.4 },
    { icon: "CS", x: "15%", y: "75%", size: "text-xl", delay: 0.6 },
    { icon: "[]", x: "50%", y: "10%", size: "text-2xl", delay: 0.8 },
  ]

  return (
    <section ref={ref} className="relative min-h-screen flex items-center pt-14 sm:pt-16 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      {/* Floating code symbols */}
      {floatingIcons.map((item, i) => (
        <motion.div
          key={i}
          className={cn("absolute text-primary/30 font-mono font-bold hidden sm:block", item.size)}
          style={{ left: item.x, top: item.y }}
          animate={{
            y: ["0%", "-15%", "0%"],
          }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            repeat: Number.POSITIVE_INFINITY,
            delay: item.delay,
          }}
        >
          {item.icon}
        </motion.div>
      ))}

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>

      <motion.div
        style={{ y, opacity }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-24 relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4 sm:space-y-6 order-1 lg:order-1"
          >
            <div className="inline-block">
              <Badge variant="outline" className="px-4 py-1 border-primary/30 bg-primary/5 text-primary animate-pulse">
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Enrolling for new batches
              </Badge>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">
                Kundan Tutorials
              </span>
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-medium leading-tight">
              Your Path to Academic Excellence Starts Here
            </h2>

            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Master C++, Python and Computer Science with specialized tutoring for exams and academic excellence
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
              <div className="flex items-center gap-2">
                <div className="bg-yellow-500/20 p-1 rounded-full">
                  <Star className="h-4 w-4 text-yellow-500" />
                </div>
                <span className="text-sm font-medium">4.8 Rating (37 Reviews)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-blue-500/20 p-1 rounded-full">
                  <MapPin className="h-4 w-4 text-blue-500" />
                </div>
                <span className="text-sm font-medium">Vaishali, Ghaziabad</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-green-500/20 p-1 rounded-full">
                  <Clock className="h-4 w-4 text-green-500" />
                </div>
                <span className="text-sm font-medium">Opens at 03:00 PM</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
              <Button
                size="lg"
                className="group bg-gradient-to-r from-primary to-purple-500 hover:opacity-90 transition-all duration-300 text-base sm:text-lg px-6 py-3"
                onClick={() => window.open('https://wa.me/919711209441?text=Hi,%20I%20would%20like%20to%20know%20more%20about%20your%20computer%20science%20tutoring%20services.', '_blank')}
              >
                <Phone className="mr-2 h-4 w-4" />
                Contact Now
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary/30 hover:border-primary transition-colors text-base sm:text-lg px-6 py-3"
                onClick={() => window.location.href = 'mailto:saritaverma2222@gmail.com?subject=Free Demo Class Request&body=Hi, I would like to book a free demo class for computer science tutoring.'}
              >
                <Sparkles className="mr-2 h-4 w-4" />
                Book Free Demo
              </Button>
            </div>

            {/* Services */}
            <div className="pt-6">
              <h3 className="text-base sm:text-lg font-medium mb-3">Specialized In:</h3>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-none text-xs sm:text-sm px-2 py-1">C++ Programming</Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-none text-xs sm:text-sm px-2 py-1">Python</Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-none text-xs sm:text-sm px-2 py-1">CS Exam Prep</Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-none text-xs sm:text-sm px-2 py-1">Java </Badge>
                                <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-none text-xs sm:text-sm px-2 py-1">Web Development</Badge>
                                                <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-none text-xs sm:text-sm px-2 py-1">Data Structure</Badge>
                                                                <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-none text-xs sm:text-sm px-2 py-1">Algorithms</Badge>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative order-2 lg:order-2 mb-6 lg:mb-0"
          >
            <div className="bg-card rounded-lg shadow-xl overflow-hidden border border-border relative z-10 backdrop-blur-sm">
              <div className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-muted border-b border-border">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-xs font-medium text-center flex-1">code-sample.py</div>
              </div>
              <pre className="p-3 sm:p-4 text-xs sm:text-sm font-mono overflow-x-auto max-h-60 sm:max-h-none">
                <code className="language-python">{text}</code>
                <span className={cn("opacity-100", cursorVisible ? "opacity-100" : "opacity-0")}>|</span>
              </pre>
            </div>

            {/* Decorative elements */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-48 h-48 sm:w-72 sm:h-72 bg-primary/20 rounded-full blur-3xl"></div>
            <motion.div
              className="absolute -right-2 sm:-right-4 -top-2 sm:-top-4 text-primary"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-dashed border-primary/30 flex items-center justify-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-dashed border-primary/50"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <a
            href="#about"
            className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="text-sm mb-2">Scroll to learn more</span>
            <ChevronDown />
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}