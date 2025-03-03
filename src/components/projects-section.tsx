"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"

import Img1 from '../../public/Img1.jpeg'
import Img2 from '../../public/img2.png'
import Img3 from '../../public/Img3.jpeg'

export default function Projects() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.1 })

    const projects = [
        {
            title: "Fintech App",
            category: "Mobile Design",
            image: Img1,
            width: 800,
            height: 600
        },
        {
            title: "E-commerce Platform",
            category: "Web Development",
            image: Img2,
            width: 800,
            height: 600
        },
        {
            title: "Travel Booking",
            category: "UX/UI Design",
            image: Img3,
            width: 800,
            height: 600
        },
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    }

    const itemVariants = {
        hidden: { y: 100, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: [0.33, 1, 0.68, 1],
            },
        },
    }

    return (
        <section id="projects" className="py-20 md:py-32 px-6 md:px-12" ref={ref}>
            <motion.div
                className="max-w-6xl mx-auto"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                <motion.h2 className="text-3xl md:text-5xl font-bold mb-16 text-center" variants={itemVariants}>
                    Selected Projects
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div key={index} variants={itemVariants} whileHover={{ y: -10 }}>
                            <Card className="project-card overflow-hidden hoverable border-0 shadow-lg">
                                <div className="relative h-80 overflow-hidden">
                                    {typeof project.image === 'string' ? (
                                        // For string-based images (like placeholder.svg)
                                        <Image
                                            src={`${project.image}?height=${project.height}&width=${project.width}`}
                                            alt={project.title}
                                            fill
                                            style={{ objectFit: "cover" }}
                                        />
                                    ) : (
                                        // For imported images
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            style={{ objectFit: "cover" }}
                                        />
                                    )}
                                </div>
                                <CardContent className="p-6">
                                    <CardDescription className="text-sm mb-2">{project.category}</CardDescription>
                                    <CardTitle>{project.title}</CardTitle>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <motion.div className="text-center mt-16" variants={itemVariants}>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button className="px-8 py-6 bg-black text-white rounded-full text-lg font-medium hoverable h-auto">
                            View all projects
                        </Button>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    )
}