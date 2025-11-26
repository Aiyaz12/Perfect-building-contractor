import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { founder, mission, whyChooseUs } from '../data/siteContent'

const About = () => (
  <div className="bg-brand-muted py-16">
    <div className="container space-y-12">
      <SectionHeading
        eyebrow="About"
        title="Architecture-led construction, rooted in craft"
        description="We orchestrate engineers, artisans, and interior stylists to deliver calm, accountable builds for discerning homeowners."
        align="left"
      />

      <div className="grid gap-10 rounded-[32px] border border-black/5 bg-white/80 p-8 shadow-soft md:grid-cols-2">
        <div className="space-y-6">
          <h3 className="font-heading text-3xl text-gray-900">
            {mission.title}
          </h3>
          <ul className="space-y-4 text-gray-600">
            {mission.points.map((point) => (
              <li key={point} className="flex gap-3">
                <span className="mt-1 h-1.5 w-8 rounded-full bg-brand-accent" />
                <p>{point}</p>
              </li>
            ))}
          </ul>
        </div>
        <motion.div
          className="rounded-[28px] bg-gray-900 p-8 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2, margin: "-50px" }}
        >
          <p className="text-xs uppercase tracking-[0.5em] text-brand-accent">
            Why Choose Us
          </p>
          <div className="mt-6 space-y-6">
            {whyChooseUs.map((item) => (
              <div key={item.title}>
                <h4 className="font-heading text-xl">{item.title}</h4>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="grid gap-10 rounded-[32px] border border-black/5 bg-white p-10 shadow-soft md:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.5em] text-brand-accent">
            Founder
          </p>
          <h3 className="font-heading text-3xl text-gray-900">{founder.name}</h3>
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
            {founder.title}
          </p>
          <p className="text-lg text-gray-600">{founder.bio}</p>
          <p className="text-sm text-gray-500">
            “We measure success by the silence after handover—when clients can
            finally exhale and enjoy their homes.”
          </p>
        </div>
        <div className="overflow-hidden rounded-[28px]">
          <img
            src={founder.photo}
            alt={founder.name}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </div>
)

export default About

