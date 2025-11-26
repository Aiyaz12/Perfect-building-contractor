import { motion } from 'framer-motion'
import {
  FiLayers,
  FiGrid,
  FiTool,
  FiRefreshCw,
  FiFeather,
  FiCheckCircle,
} from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading'
import { services } from '../data/siteContent'

const iconMap = {
  pop: FiLayers,
  gypsum: FiGrid,
  'false-ceiling': FiTool,
  renovations: FiRefreshCw,
  'interior-design': FiFeather,
}

const processSteps = [
  {
    title: 'Discovery & Site Study',
    detail:
      'Measurements, services audit, and visual mood-boarding to frame the build brief.',
  },
  {
    title: 'Design Detailing',
    detail:
      '2D layouts, lighting diagrams, and BOQs reviewed on collaborative boards.',
  },
  {
    title: 'Execution & QA',
    detail:
      'Dedicated site lead, weekly snag walks, and WhatsApp progress dashboards.',
  },
]

const Services = () => (
  <div className="bg-white py-16">
    <div className="container space-y-12">
      <SectionHeading
        eyebrow="Services"
        title="Every discipline required for clean, calm residential builds"
        description="Specialized contracting teams for P.O.P, gypsum, ceilings, renovations, and interior design collaborate under one schedule."
        align="left"
      />

      <div className="grid gap-6 md:grid-cols-2">
        {services.map((service) => {
          const Icon = iconMap[service.id] ?? FiCheckCircle
          return (
            <motion.div
              key={service.id}
              className="relative overflow-hidden rounded-[30px] border border-black/5 bg-brand-muted/60 p-6 shadow-soft transition hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2, margin: "-50px" }}
              transition={{ duration: 0.4 }}
            >
              <Icon className="text-brand-accent" size={28} />
              <h3 className="mt-4 font-heading text-2xl text-gray-900">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-600">{service.description}</p>
              <div className="mt-6 flex flex-wrap gap-2 text-xs uppercase tracking-[0.3em] text-gray-500">
                <span className="rounded-full border border-gray-300 px-3 py-1">
                  Detailing
                </span>
                <span className="rounded-full border border-gray-300 px-3 py-1">
                  QA
                </span>
                <span className="rounded-full border border-gray-300 px-3 py-1">
                  Handover
                </span>
              </div>
            </motion.div>
          )
        })}
      </div>

      <div className="rounded-[32px] border border-black/5 bg-gray-900 p-10 text-white">
        <SectionHeading
          eyebrow="Method"
          title="Process-led workflows"
          description="Smooth transitions between planning, execution, and styling ensure predictable timelines."
          align="left"
          tone="light"
        />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {processSteps.map((step, index) => (
            <div key={step.title} className="space-y-3">
              <p className="text-xs uppercase tracking-[0.4em] text-brand-accent">
                0{index + 1}
              </p>
              <h4 className="font-heading text-xl">{step.title}</h4>
              <p className="text-sm text-gray-300">{step.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
)

export default Services

