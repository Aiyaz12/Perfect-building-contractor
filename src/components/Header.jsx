import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { FiMenu, FiX, FiPhone } from 'react-icons/fi'
import { company, navigationLinks } from '../data/siteContent'

const linkClasses = ({ isActive }) =>
  `text-sm tracking-wide uppercase ${
    isActive ? 'text-brand-accent' : 'text-gray-700'
  } hover:text-brand-accent transition-colors`

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-black/5">
      <div className="container flex items-center justify-between py-4">
        <Link to="/" className="font-heading text-xl tracking-widest">
          perfect building contractor
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navigationLinks.map((link) => (
            <NavLink key={link.path} to={link.path} className={linkClasses}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <FiPhone className="text-brand-accent" />
            <a href={`tel:+91${company.phone.replace(/\s/g, '')}`}>
              {company.phone}
            </a>
          </div>
          <Link
            to="/contact"
            className="rounded-full border border-gray-900 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] hover:bg-gray-900 hover:text-white transition-colors"
          >
            Contact
          </Link>
        </div>

        <button
          className="md:hidden rounded-full border border-black/20 p-2"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FiX size={18} /> : <FiMenu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-black/5 bg-white"
          >
            <div className="container flex flex-col py-4 gap-4">
              {navigationLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-base ${
                      isActive ? 'text-brand-accent' : 'text-gray-800'
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </NavLink>
              ))}
              <a
                href={`tel:+91${company.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-3 text-sm font-medium text-gray-700"
              >
                <FiPhone />
                {company.phone}
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header

