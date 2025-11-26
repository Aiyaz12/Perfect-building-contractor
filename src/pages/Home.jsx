import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import AnimatedCounter from '../components/AnimatedCounter'
import GalleryLightbox from '../components/GalleryLightbox'
import {
  counters,
  latestProject,
  sliderCategories,
  testimonials,
} from '../data/siteContent'

const heroBg =
  'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=2000&q=80'

const Home = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxImage, setLightboxImage] = useState(null)

  const openLightbox = (image, title) => {
    setLightboxImage({ image, title })
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    setLightboxImage(null)
  }

  return (
    <div className="space-y-20 pb-20">
    <section className="relative isolate overflow-hidden rounded-b-[40px] bg-gray-900 text-white">
      <img
        src={heroBg}
        alt="Luxury residence"
        className="absolute inset-0 h-full w-full object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
      <div className="container relative flex min-h-[75vh] flex-col justify-center gap-8 py-24">
        <p className="text-xs uppercase tracking-[0.5em] text-gray-300">
          Premium Residential Construction
        </p>
        <h1 className="font-heading text-4xl leading-tight md:text-6xl">
          Nisha Enterprises
        </h1>
        <p className="text-lg text-gray-200 md:text-xl">
          Premium residential construction &amp; interior solutions built with
          obsessive detail, transparent delivery, and calm project experiences.
        </p>
        <div className="flex flex-wrap gap-4 text-sm uppercase tracking-[0.4em]">
          <Link
            to="/projects"
            className="rounded-full border border-white px-8 py-3 font-semibold text-white transition hover:bg-white hover:text-gray-900"
          >
            View Projects
          </Link>
          <Link
            to="/contact"
            className="rounded-full border border-transparent bg-white/20 px-8 py-3 font-semibold text-white backdrop-blur transition hover:bg-white hover:text-gray-900"
          >
            Contact Now
          </Link>
        </div>
      </div>
    </section>

    <section className="container space-y-8" >
      <SectionHeading
        eyebrow="Impact"
        title="Statistics that matter"
        description="Counters rise on scroll to showcase the scale of delivery across residential builds."
        align="left"
      />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4" >
        {counters.map((counter) => (
          <AnimatedCounter key={counter.label} {...counter} />
        ))}
      </div>
    </section>

    <section className="container space-y-6">
      <SectionHeading
        eyebrow="Project Focus"
        title="Multi-layer project categories"
        description="Tap into curated residential experiences—from bespoke villas to boutique interiors and renovation rescues."
        align="left"
      />
      <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4">
        {sliderCategories.map((category) => (
          <motion.div
            key={category.id}
            className="min-w-[240px] snap-start rounded-3xl border border-black/5 bg-white shadow-soft"
            whileHover={{ translateY: -8 }}
          >
            <div className="overflow-hidden rounded-t-3xl">
              <button
                onClick={() => openLightbox(category.image, category.title)}
                className="block w-full"
              >
                <img
                  src={category.image}
                  alt={category.title}
                  className="h-40 w-full object-cover transition duration-500 hover:scale-105 cursor-pointer"
                  loading="lazy"
                />
              </button>
            </div>
            <div className="p-5">
              <p className="font-heading text-lg text-gray-900">
                {category.title}
              </p>
              <p className="text-sm text-gray-500"></p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>

    {/* <section className="container">
      <div className="grid gap-12 rounded-[32px] border border-black/5 bg-white p-8 shadow-soft md:grid-cols-2">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.5em] text-brand-accent">
            Featured
          </p>
          <h3 className="font-heading text-3xl text-gray-900">
            {latestProject.title}
          </h3>
          <p className="text-gray-600">{latestProject.description}</p>
          <div className="grid gap-4 sm:grid-cols-3">
            {latestProject.stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl bg-gray-50 p-4">
                <p className="text-xs uppercase tracking-[0.4em] text-gray-400">
                  {stat.label}
                </p>
                <p className="font-semibold text-gray-900">{stat.value}</p>
              </div>
            ))}
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center text-sm font-semibold text-brand-accent"
          >
            Dive into the full build →
          </Link>
        </div>
        <motion.div
          className="overflow-hidden rounded-[24px] cursor-pointer"
          whileHover={{ scale: 0.98 }}
          onClick={() => openLightbox(latestProject.image, latestProject.title)}
        >
          <img
            src={latestProject.image}
            alt={latestProject.title}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section> */}

    {/* <section className="container space-y-8">
      <SectionHeading
        eyebrow="Impact"
        title="Statistics that matter"
        description="Counters rise on scroll to showcase the scale of delivery across residential builds."
        align="left"
      />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {counters.map((counter) => (
          <AnimatedCounter key={counter.label} {...counter} />
        ))}
      </div>
    </section> */}

    <section className="container space-y-8">
      <SectionHeading
        eyebrow="Clients"
        title="Testimonials preview"
        description="Stories from homeowners who trusted us with their most personal spaces."
        align="left"
      />
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <motion.div
            key={testimonial.name}
            className="rounded-3xl border border-black/5 bg-white p-6 shadow-soft"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2, margin: "-50px" }}
            transition={{ duration: 0.4 }}
          >
            <p className="text-lg text-gray-900">“{testimonial.quote}”</p>
            <div className="mt-6 text-sm font-semibold text-gray-700">
              {testimonial.name}
            </div>
            <p className="text-xs uppercase tracking-[0.4em] text-gray-400">
              {testimonial.role}
            </p>
          </motion.div>
        ))}
      </div>
    </section>

    {lightboxOpen && lightboxImage && (
      <GalleryLightbox
        images={[lightboxImage]}
        index={0}
        title={lightboxImage.title}
        onClose={closeLightbox}
        // onPrev={() => {}} // Single image, no prev
        // onNext={() => {}} // Single image, no next
      />
    )}
  </div>
  )
}

export default Home

