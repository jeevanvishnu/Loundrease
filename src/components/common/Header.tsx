import logo from '../../assets/images/logo.svg';

export function Header() {
  return (
    <header className="w-full bg-bg-light">
      <div className="h-[48px] bg-primary text-white">
        <div
          className="mx-auto flex h-full w-full max-w-[1240px] items-center justify-end gap-6 px-6 text-[14px] font-medium"
          data-reveal="slide-left"
        >
          <div className="flex items-center gap-2">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                d="M3 5a2 2 0 0 1 2-2h3.28a1 1 0 0 1 .95.69l1.5 4.49a1 1 0 0 1-.5 1.21l-2.26 1.13a11.04 11.04 0 0 0 5.52 5.52l1.13-2.26a1 1 0 0 1 1.21-.5l4.49 1.5a1 1 0 0 1 .69.95V19a2 2 0 0 1-2 2h-1C9.72 21 3 14.28 3 6V5Z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
            <span>+65 256-8625</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                d="M17.66 16.66 13.41 20.9a2 2 0 0 1-2.82 0l-4.25-4.24a8 8 0 1 1 11.32 0Z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
              <path d="M15 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
            <span>Find Service Area</span>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-[1240px] px-6">
        <div className="flex h-[104px] items-center justify-between">
          <div className="flex items-center" data-reveal="slide-right">
            <img src={logo} alt="Laundrease Logo" className="h-[38px] w-auto" />
          </div>

          <nav className="hidden items-center gap-12 text-[15px] text-primary lg:flex" data-reveal>
            <a href="#" className="leading-none">Home</a>
            <a href="#" className="leading-none">About</a>
            <a href="#" className="leading-none">Service</a>
            <div className="flex items-center gap-1 leading-none">
              <span>All pages</span>
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="m19 9-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </nav>

          <div className="hidden lg:block" data-reveal="slide-left">
            <button className="h-[44px] rounded-[16px] border border-[#cdd4d3] px-8 text-[13px] font-semibold tracking-[0.01em] text-primary">
              CONTACT US
            </button>
          </div>

          <div className="lg:hidden">
            <button className="p-2 text-primary">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
