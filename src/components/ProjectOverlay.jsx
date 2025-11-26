import { motion } from 'framer-motion'
import { FiX } from 'react-icons/fi'

const ProjectOverlay = ({ category, onDismiss, onPreview }) => {
  if (!category) return null

  const handleBackgroundClick = (event) => {
    if (event.target === event.currentTarget) {
      onDismiss()
    }
  }

  return (
    <motion.div
      className="fixed inset-0 z-40 bg-black/75 backdrop-blur-sm p-4 md:p-10"
      onClick={handleBackgroundClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="mx-auto flex h-full w-full max-w-6xl flex-col rounded-3xl bg-white/95 p-6 shadow-soft"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 30, opacity: 0 }}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-gray-500">
              Category
            </p>
            <h3 className="font-heading text-3xl text-gray-900">
              {category.title}
            </h3>
            <p className="max-w-2xl text-gray-600">{category.summary}</p>
          </div>
          <button
            onClick={onDismiss}
            className="rounded-full border border-black/10 p-2 text-gray-500 hover:text-gray-900"
            aria-label="Close gallery"
          >
            <FiX size={20} />
          </button>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 max-h-96 overflow-y-auto pr-2 md:grid-cols-3">
          {category.projects.map((project, index) => (
            <button
              key={project.id}
              onClick={() => onPreview(index)}
              className="group relative overflow-hidden rounded-2xl border border-black/5 text-left min-h-[200px]"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="flex flex-col gap-1 bg-white/95 p-4">
                <p className="font-semibold text-gray-900">{project.title}</p>
                <p className="text-sm text-gray-500">{project.caption}</p>
              </div>
            </button>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}


export default ProjectOverlay

