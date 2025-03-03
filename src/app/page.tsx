"use client"

import { useEffect, useState } from "react"
import Hero from "@/components/hero-section"
import Navbar from "@/components/navbar-header"
import Services from "@/components/services"
import Projects from "@/components/projects-section"
import Footer from "@/components/footer"
import CustomCursor from "@/components/cursor"
import { AnimatePresence } from "framer-motion"
import Loader from "@/components/loader"

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="bg-white text-black overflow-hidden">
      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="loader" />
        ) : (
          <>
            <CustomCursor />
            <Navbar />
            <Hero />
            <Services />
            <Projects />
            <Footer />
          </>
        )}
      </AnimatePresence>
    </main>
  )
}

