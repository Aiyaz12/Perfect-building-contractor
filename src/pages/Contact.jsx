import SectionHeading from '../components/SectionHeading'
import { company, contactCards } from '../data/siteContent'

const Contact = () => {

  return (
    <div className="bg-brand-muted py-16">
      <div className="container space-y-12">
        <SectionHeading
          eyebrow="Contact"
          title="Share your project vision"
          description="Tell us about your site, timelines, and wish-list interiors. We respond within one business day."
          align="left"
        />

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
          <div className="rounded-[32px] border border-black/5 bg-white p-8 shadow-soft">
            <p className="text-xs uppercase tracking-[0.5em] text-brand-accent">
              Contact
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {contactCards.map((card) => (
                <a
                  key={card.label}
                  href={card.action}
                  className="rounded-2xl border border-black/5 p-4 text-left hover:border-gray-900 transition break-words"
                >
                  <p className="text-xs uppercase tracking-[0.4em] text-gray-400">
                    {card.label}
                  </p>
                  <p className="text-sm md:text-lg font-semibold text-gray-900 break-words">
                    {card.value}
                  </p>
                </a>
              ))}
              <a
                href={company.whatsappLink}
                className="rounded-2xl border border-green-500/30 bg-green-50 p-4 text-green-700 break-words"
              >
                <span className="text-sm md:text-base font-semibold break-words">WhatsApp • {company.phone}</span>
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-[32px] border border-black/5 shadow-soft">
            <iframe
              title="Nisha Enterprises office location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d515.0964039913537!2d72.85543099006505!3d19.295823523487414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b033c02f5113%3A0x1a3b6ef6413a96f4!2sQamar%20Park%2C%20Bhayandar%20East%2C%20Mira%20Bhayandar%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1764108578558!5m2!1sen!2sin"
              width="100%"
              className="h-64 md:h-80"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

