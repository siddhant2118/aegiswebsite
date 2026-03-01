"use client"

import { useLayoutEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

function setReducedMotionMode() {
  document.documentElement.classList.add("landing-reduced-motion")
}

export function useLandingAnimations() {
  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (prefersReducedMotion) {
      setReducedMotionMode()
      return
    }

    gsap.registerPlugin(ScrollTrigger)

    const cleanupFns: Array<() => void> = []

    const ctx = gsap.context(() => {
      const heroTimeline = gsap.timeline({ defaults: { ease: "power3.out" } })

      heroTimeline
        .from(".landing-nav-wrap", { y: -24, autoAlpha: 0, duration: 0.55 })
        .from("[data-hero-word]", { y: 36, autoAlpha: 0, stagger: 0.12, duration: 0.7 }, "-=0.1")
        .from("[data-hero-item]", { y: 20, autoAlpha: 0, stagger: 0.08, duration: 0.55 }, "-=0.35")

      ScrollTrigger.batch("[data-reveal]", {
        start: "top 86%",
        onEnter: (batch) => {
          gsap.fromTo(
            batch,
            { y: 24, autoAlpha: 0 },
            { y: 0, autoAlpha: 1, duration: 0.75, stagger: 0.12, ease: "power2.out", overwrite: true }
          )
        },
      })

      gsap.utils.toArray<HTMLElement>("[data-float-chip]").forEach((chip, index) => {
        gsap.to(chip, {
          y: index % 2 === 0 ? -10 : 10,
          duration: 2.7 + index * 0.35,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        })
      })

      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((layer) => {
        gsap.to(layer, {
          yPercent: -6,
          ease: "none",
          scrollTrigger: {
            trigger: layer,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.9,
          },
        })
      })

      const magnets = gsap.utils.toArray<HTMLElement>("[data-magnet]")
      magnets.forEach((element) => {
        const xTo = gsap.quickTo(element, "x", { duration: 0.35, ease: "power3.out" })
        const yTo = gsap.quickTo(element, "y", { duration: 0.35, ease: "power3.out" })

        const move = (event: MouseEvent) => {
          const rect = element.getBoundingClientRect()
          const relX = (event.clientX - (rect.left + rect.width / 2)) * 0.2
          const relY = (event.clientY - (rect.top + rect.height / 2)) * 0.25
          xTo(relX)
          yTo(relY)
        }

        const reset = () => {
          xTo(0)
          yTo(0)
        }

        element.addEventListener("mousemove", move)
        element.addEventListener("mouseleave", reset)

        cleanupFns.push(() => {
          element.removeEventListener("mousemove", move)
          element.removeEventListener("mouseleave", reset)
        })
      })

      const featureSection = document.querySelector<HTMLElement>("[data-feature-section]")
      const featureViewport = document.querySelector<HTMLElement>("[data-feature-viewport]")
      const featureTrack = document.querySelector<HTMLElement>("[data-feature-track]")

      if (featureSection && featureViewport && featureTrack) {
        const isDesktop = () => window.innerWidth >= 1024
        let refreshHandler: (() => void) | null = null

        const buildFeatureRail = () => {
          ScrollTrigger.getById("landing-feature-rail")?.kill()
          gsap.set(featureTrack, { x: 0 })

          if (!isDesktop()) return

          const maxX = Math.max(0, featureTrack.scrollWidth - featureViewport.clientWidth)
          if (maxX <= 0) return

          gsap.to(featureTrack, {
            x: -maxX,
            ease: "none",
            scrollTrigger: {
              id: "landing-feature-rail",
              trigger: featureSection,
              start: "top top",
              end: `+=${maxX + window.innerHeight * 0.7}`,
              pin: true,
              scrub: 1,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          })
        }

        buildFeatureRail()
        refreshHandler = () => buildFeatureRail()
        ScrollTrigger.addEventListener("refreshInit", refreshHandler)

        cleanupFns.push(() => {
          if (refreshHandler) ScrollTrigger.removeEventListener("refreshInit", refreshHandler)
          ScrollTrigger.getById("landing-feature-rail")?.kill()
        })
      }
    })

    return () => {
      cleanupFns.forEach((fn) => fn())
      ctx.revert()
    }
  }, [])
}
