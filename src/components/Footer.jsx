import { FiFacebook, FiInstagram, FiYoutube, FiPhone, FiMapPin } from 'react-icons/fi'
import { company } from '../data/siteContent'

const socialLinks = [
  { icon: FiFacebook, label: 'Facebook', href: '#' },
  { icon: FiInstagram, label: 'Instagram', href: '#' },
  { icon: FiYoutube, label: 'YouTube', href: '#' },
]

const Footer = () => (
  <footer className="bg-gray-900 text-gray-200">
    <div className="container grid gap-10 py-12 md:grid-cols-3">
      <div className="space-y-4">
        <p className="font-heading text-2xl tracking-wide text-white">
          Nisha Enterprises
        </p>
        <p className="text-sm text-gray-400">
          Premium residential construction and interior partners for
          architecture-forward homeowners across India.
        </p>
        <div className="flex gap-3">
          {socialLinks.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white hover:bg-white hover:text-gray-900 transition-colors"
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>

      <div className="space-y-3 text-sm">
        <p className="text-xs uppercase tracking-[0.4em] text-gray-500">
          Connect
        </p>
        <a
          href={`tel:+91${company.phone.replace(/\s/g, '')}`}
          className="flex items-center gap-3 text-gray-300 hover:text-white"
        >
          <FiPhone />
          {company.phone}
        </a>
        <a
          href={`mailto:${company.email}`}
          className="text-gray-300 hover:text-white"
        >
          {company.email}
        </a>
        <a
          href={company.whatsappLink}
          className="inline-flex rounded-full border border-white/30 px-4 py-2 text-xs uppercase tracking-[0.3em] hover:bg-white hover:text-gray-900 transition-colors"
        >
          WhatsApp
        </a>
      </div>

      <div className="space-y-3 text-sm">
        <p className="text-xs uppercase tracking-[0.4em] text-gray-500">
          Studio
        </p>
        <p className="flex items-start gap-3 text-gray-300">
          <FiMapPin className="mt-1 shrink-0" />
          {company.address}
        </p>
      </div>
    </div>
    <div className="border-t border-white/10 py-6 text-center text-xs text-gray-500">
      © {new Date().getFullYear()} Nisha Enterprises. All rights reserved.
    </div>
  </footer>
)

export default Footer

