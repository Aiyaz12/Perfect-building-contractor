import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const GalleryLightbox = ({
  images,
  index,
  onClose,
  onNext,
  onPrev,
  caption,
  title,
}) => {
  useEffect(() => {
    const handleKey = (event) => {
      if (event.key === 'Escape') onClose()
      if (images.length > 1) {
        if (event.key === 'ArrowRight') onNext()
        if (event.key === 'ArrowLeft') onPrev()
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose, onNext, onPrev, images.length])

  if (!images?.length) return null

  const currentImage = images[index]

  const handleBackgroundClick = (event) => {
    if (event.target === event.currentTarget) onClose()
  }

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={handleBackgroundClick}
      >
        <motion.div
          className="relative w-full max-w-5xl rounded-[32px] bg-white/5 p-4 text-white md:p-8"
          initial={{ scale: 0.94, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.94, opacity: 0 }}
        >
          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-full border border-white/30 p-2 text-white hover:bg-white hover:text-gray-900"
            aria-label="Close gallery"
          >
            <FiX size={20} />
          </button>

          {/* <div className="flex items-center justify-between text-xs uppercase tracking-[0.4em] text-gray-300">
            <span>{title}</span>
            <span>
              {index + 1} / {images.length}
            </span>
          </div> */}

          <div className="relative mt-6 flex items-center justify-center overflow-hidden rounded-[24px] bg-black/40">
            <motion.img
              key={currentImage.image}
              src={currentImage.image}
              alt={currentImage.title}
              className="max-h-[60vh] w-full object-contain"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
            />

            {images.length > 1 && (
              <>
                <button
                  onClick={onPrev}
                  className="absolute left-4 rounded-full border border-white/40 bg-black/30 p-3 text-white hover:bg-white hover:text-gray-900"
                  aria-label="Previous image"
                >
                  <FiChevronLeft size={20} />
                </button>
                <button
                  onClick={onNext}
                  className="absolute right-4 rounded-full border border-white/40 bg-black/30 p-3 text-white hover:bg-white hover:text-gray-900"
                  aria-label="Next image"
                >
                  <FiChevronRight size={20} />
                </button>
              </>
            )}
          </div>

          <div className="mt-4 space-y-2">
            <p className="text-lg font-semibold text-white">
              {currentImage.title}
            </p>
            {(caption || currentImage.caption) && (
              <p className="text-sm text-gray-200">
                {caption ?? currentImage.caption}
              </p>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}


export default GalleryLightbox

