import { motion } from 'framer-motion'

const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = 'center',
  tone = 'dark',
  className = '',
}) => {
  const alignment =
    align === 'left'
      ? 'items-start text-left'
      : align === 'right'
        ? 'items-end text-right'
        : 'items-center text-center'
  const titleColor = tone === 'light' ? 'text-white' : 'text-gray-900'
  const descriptionColor = tone === 'light' ? 'text-gray-200' : 'text-gray-600'

  return (
    <motion.div
      className={`flex flex-col gap-3 ${alignment} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      {eyebrow && (
        <span className="uppercase tracking-[0.4em] text-sm text-brand-accent">
          {eyebrow}
        </span>
      )}
      <h2 className={`font-heading text-3xl md:text-4xl ${titleColor}`}>
        {title}
      </h2>
      {description && (
        <p className={`text-base max-w-2xl ${descriptionColor}`}>
          {description}
        </p>
      )}
    </motion.div>
  )
}

export default SectionHeading

