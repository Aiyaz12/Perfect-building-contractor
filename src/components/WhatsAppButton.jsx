import { FaWhatsapp } from 'react-icons/fa'
import { company } from '../data/siteContent'

const WhatsAppButton = () => (
  <a
    href={company.whatsappLink}
    target="_blank"
    rel="noreferrer"
    className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-green-500 px-5 py-3 font-semibold text-white shadow-soft transition hover:translate-y-[-2px]"
  >
    <FaWhatsapp size={20} />
    Chat on WhatsApp
  </a>
)

export default WhatsAppButton

