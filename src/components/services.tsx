"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Services() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.2 })

    const services = [
        {
            title: "Web Design",
            description: "We create beautiful, intuitive websites that drive user engagement and business growth.",
        },
        {
            title: "Mobile Apps",
            description: "Native and cross-platform mobile applications with a focus on performance and usability.",
        },
        {
            title: "UX/UI Design",
            description: "User-centered design approach to create meaningful and relevant experiences.",
        },
        {
            title: "Branding",
            description: "Strategic brand development that communicates your values and connects with your audience.",
        },
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    }

    const titleVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    }

    return (
        <section id="services" className="py-20 md:py-32 px-6 md:px-12 bg-gray-50" ref={ref}>
            <motion.div
                className="max-w-6xl mx-auto"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                <motion.h2 className="text-3xl md:text-5xl font-bold mb-16 text-center" variants={titleVariants}>
                    Our Services
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{
                                y: -10,
                                transition: { duration: 0.3 },
                            }}
                        >
                            <Card className="service-card border border-gray-200 hover:shadow-xl hover:border-gray-400 h-full transition-all duration-300">
                                <CardHeader>
                                    <CardTitle className="text-xl md:text-2xl">{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-base">{service.description}</CardDescription>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Enhanced Marquee Section */}
                <div className="mt-24 overflow-hidden bg-black py-6 rounded-lg">
                    <motion.div 
                        className="whitespace-nowrap"
                        animate={{ 
                            x: [0, -1000],
                        }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 20,
                                ease: "linear",
                            }
                        }}
                    >
                        <div className="marquee-content text-4xl md:text-6xl font-bold text-white inline-block pr-8">
                            WEB DESIGN • MOBILE APPS • UX/UI • BRANDING • DEVELOPMENT • 
                        </div>
                        <div className="marquee-content text-4xl md:text-6xl font-bold text-white inline-block pr-8">
                            WEB DESIGN • MOBILE APPS • UX/UI • BRANDING • DEVELOPMENT • 
                        </div>
                        <div className="marquee-content text-4xl md:text-6xl font-bold text-white inline-block pr-8">
                            WEB DESIGN • MOBILE APPS • UX/UI • BRANDING • DEVELOPMENT • 
                        </div>
                    </motion.div>
                </div>
                
                {/* Interactive Call to Action */}
                <motion.div 
                    className="mt-16 text-center"
                    variants={itemVariants}
                >
                    <motion.button 
                        className="px-8 py-4 bg-black text-white font-bold rounded-lg text-lg"
                        whileHover={{ scale: 1.05, backgroundColor: "#333333" }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Explore Our Services
                    </motion.button>
                </motion.div>
            </motion.div>
        </section>
    )
}