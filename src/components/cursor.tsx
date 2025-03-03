"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function CustomCursor() {
    const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 })
    const [cursorVariant, setCursorVariant] = useState("default")

    useEffect(() => {
        const mouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY,
            })
        }

        window.addEventListener("mousemove", mouseMove)

        const hoverables = document.querySelectorAll("a, button, .hoverable")
        const handleMouseEnter = () => setCursorVariant("hover")
        const handleMouseLeave = () => setCursorVariant("default")

        hoverables.forEach((hoverable) => {
            hoverable.addEventListener("mouseenter", handleMouseEnter)
            hoverable.addEventListener("mouseleave", handleMouseLeave)
        })

        return () => {
            window.removeEventListener("mousemove", mouseMove)
            hoverables.forEach((hoverable) => {
                hoverable.removeEventListener("mouseenter", handleMouseEnter)
                hoverable.removeEventListener("mouseleave", handleMouseLeave)
            })
        }
    }, [])

    const variants = {
        default: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            transition: { type: "spring", mass: 0.6 },
        },
        hover: {
            x: mousePosition.x - 32,
            y: mousePosition.y - 32,
            height: 64,
            width: 64,
            transition: { type: "spring", mass: 0.6 },
        },
    }

    const followerVariants = {
        default: {
            x: mousePosition.x - 4,
            y: mousePosition.y - 4,
            transition: { type: "spring", mass: 0.2, damping: 8 },
        },
    }

    return (
        <>
            <motion.div className="cursor" variants={variants} animate={cursorVariant} />
            <motion.div className="cursor-follower" variants={followerVariants} animate="default" />
        </>
    )
}