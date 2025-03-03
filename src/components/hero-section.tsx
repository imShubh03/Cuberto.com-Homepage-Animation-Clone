"use client"

import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function Hero() {
    const controls = useAnimation()
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    useEffect(() => {
        if (isInView) {
            controls.start("visible")
        }
    }, [controls, isInView])

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    }

    const itemVariants = {
        hidden: { y: 75, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: [0.33, 1, 0.68, 1], // cubic-bezier
            },
        },
    }

    return (
        <section className="min-h-screen flex items-center justify-center px-6 md:px-12 pt-24">
            <motion.div
                ref={ref}
                className="max-w-6xl mx-auto text-center"
                variants={containerVariants}
                initial="hidden"
                animate={controls}
            >
                <motion.div variants={itemVariants} className="overflow-hidden">
                    <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6">We create</h1>
                </motion.div>
                <motion.div variants={itemVariants} className="overflow-hidden">
                    <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6">digital experiences</h1>
                </motion.div>
                <motion.div variants={itemVariants} className="overflow-hidden">
                    <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-12">
                        Award-winning design studio focused on mobile and web applications that solve real business problems.
                    </p>
                </motion.div>
                <motion.div variants={itemVariants}>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button className="px-8 py-6 bg-black text-white rounded-full text-lg font-medium hoverable h-auto">
                            See our work
                        </Button>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    )
}

