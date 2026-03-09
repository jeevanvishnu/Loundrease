import { ChevronDown, MapPin, Phone } from 'lucide-react'
import logo from '../../assets/images/logo.svg'

const navItems = ['Home', 'About', 'Service']

export default function Navbar() {
  return (
    <div className="fixed inset-x-0 top-0 z-50 w-full font-outfit">
      <div className="h-[44px] bg-[#003935]">
        <div className="mx-auto flex h-full max-w-[1180px] items-center justify-end gap-6 px-4 text-[13px] font-semibold text-white sm:px-8 lg:px-10">
          <span className="flex items-center gap-2">
            <Phone className="h-3.5 w-3.5 stroke-[2.3]" />
            +65 256-8625
          </span>
          <span className="flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5 stroke-[2.3]" />
            Find Service Area
          </span>
        </div>
      </div>

      <header className="h-[82px] border-b border-[#edf0ed] bg-white">
        <div className="mx-auto flex h-full max-w-[1180px] items-center justify-between px-4 sm:px-8 lg:px-10">
          <a href="#" className="inline-flex items-center">
            <img src={logo} alt="Laundrease" className="h-[25px] w-auto" />
          </a>

          <nav className="hidden items-center gap-11 text-[16px] font-medium text-dark-green md:flex">
            {navItems.map((item) => (
              <a key={item} href="#" className="leading-none">
                {item}
              </a>
            ))}
            <a href="#" className="inline-flex items-center gap-1 leading-none">
              All pages
              <ChevronDown className="h-4 w-4" />
            </a>
          </nav>

          <button
            type="button"
            className="h-[44px] rounded-[16px] border border-[#ccd4d2] px-7 text-[13px] font-extrabold uppercase tracking-[0.01em] text-dark-green"
          >
            CONTACT US
          </button>
        </div>
      </header>
    </div>
  )
}
