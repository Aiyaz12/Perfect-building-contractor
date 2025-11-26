import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import ProjectOverlay from '../components/ProjectOverlay'
import GalleryLightbox from '../components/GalleryLightbox'
import { projectCategories } from '../data/siteContent'

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState(null)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  const openCategory = (category) => {
    setActiveCategory(category)
    setIsLightboxOpen(false)
  }

  const openLightbox = (index) => {
    setActiveIndex(index)
    setIsLightboxOpen(true)
  }

  const handleCloseOverlay = () => {
    setIsLightboxOpen(false)
    setActiveCategory(null)
  }

  const images = activeCategory?.projects ?? []

  return (
    <div className="bg-brand-muted pb-16 pt-12">
      <div className="container space-y-12">
        <SectionHeading
          eyebrow="Projects"
          title="Choose a category and deep dive into layered galleries"
          description="Every category opens a modal gallery grid, then a second immersive slideshow with captions, swipe, zoom, and navigation controls."
          align="left"
        />

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projectCategories.map((category) => (
            <motion.button
              key={category.id}
              className="group overflow-hidden rounded-[32px] border border-black/5 bg-white text-left shadow-soft transition hover:-translate-y-2"
              onClick={() => openCategory(category)}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={category.thumbnail}
                  alt={category.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <span className="absolute bottom-4 left-4 rounded-full bg-white/80 px-4 py-1 text-xs uppercase tracking-[0.4em] text-gray-900">
                  Tap to open
                </span>
              </div>
              <div className="space-y-3 p-6">
                <p className="text-xs uppercase tracking-[0.5em] text-brand-accent">
                  Gallery
                </p>
                <h3 className="font-heading text-2xl text-gray-900">
                  {category.title}
                </h3>
                <p className="text-gray-600">{category.summary}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeCategory && (
          <ProjectOverlay
            category={activeCategory}
            onDismiss={handleCloseOverlay}
            onPreview={(index) => openLightbox(index)}
          />
        )}
      </AnimatePresence>

      {isLightboxOpen && activeCategory && images.length > 0 && (
        <GalleryLightbox
          images={images}
          index={activeIndex}
          title={activeCategory.title}
          onClose={() => setIsLightboxOpen(false)}
          onPrev={() =>
            setActiveIndex(
              (activeIndex + images.length - 1) % images.length,
            )
          }
          onNext={() => setActiveIndex((activeIndex + 1) % images.length)}
        />
      )}
    </div>
  )
}

export default Projects

