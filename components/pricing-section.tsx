"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function PricingSection() {
  const plans = [
    {
      name: "Basic",
      price: "₹3,500",
      duration: "per month",
      description: "Perfect for beginners starting their CS journey",
      features: [
        "2 classes per week (1 hour each)",
        "Basic programming concepts",
        "Monthly progress report",
        "Email support",
        "Homework assignments",
      ],
      highlighted: false,
      buttonText: "Get Started",
    },
    {
      name: "Standard",
      price: "₹5,500",
      duration: "per month",
      description: "Most popular choice for regular students",
      features: [
        "3 classes per week (1 hour each)",
        "Advanced programming concepts",
        "Weekly progress reports",
        "Priority email & chat support",
        "Homework & projects",
        "Mock tests & assessments",
        "Doubt clearing sessions",
      ],
      highlighted: true,
      buttonText: "Recommended",
    },
    {
      name: "Premium",
      price: "₹8,000",
      duration: "per month",
      description: "Intensive program for serious learners",
      features: [
        "4 classes per week (1 hour each)",
        "Advanced programming & algorithms",
        "Weekly detailed progress reports",
        "24/7 priority support",
        "Advanced projects & portfolio building",
        "Olympiad preparation",
        "Unlimited doubt clearing sessions",
        "Career guidance & mentorship",
      ],
      highlighted: false,
      buttonText: "Get Premium",
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
    <section id="pricing" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Class Schedule & Plans</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that best fits your learning goals and schedule
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {plans.map((plan, index) => (
            <motion.div key={index} variants={item}>
              <Card
                className={`h-full flex flex-col ${
                  plan.highlighted ? "border-primary shadow-lg shadow-primary/10" : "border-border"
                }`}
              >
                {plan.highlighted && (
                  <div className="bg-primary text-primary-foreground text-center py-1 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground ml-1">{plan.duration}</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className={`w-full ${
                      plan.highlighted ? "bg-primary hover:bg-primary/90" : "bg-primary/80 hover:bg-primary"
                    }`}
                  >
                    {plan.buttonText}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Not sure which plan is right for you? Start with a free trial class!
          </p>
          <Button size="lg" variant="outline">
            Book a Free Demo Class
          </Button>
        </div>
      </div>
    </section>
  )
}
