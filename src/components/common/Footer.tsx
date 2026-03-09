export function Footer() {
  return (
    <footer className="w-full bg-white pb-12 pt-8 px-4 sm:px-6 md:px-8">
      <div className="container mx-auto max-w-7xl bg-[#002B28] rounded-[32px] px-8 py-12 md:px-14 md:py-16 flex flex-col gap-14" data-reveal="zoom">
        
        {/* Top CTA Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10" data-reveal>
          <h3 className="text-3xl md:text-[40px] font-phudu md:leading-snug font-bold text-white max-w-lg lg:max-w-xl uppercase tracking-wide">
            Laundry Tips and Exclusive Offers Await!
          </h3>
          <form className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            <input 
              type="email" 
              placeholder="ENTER EMAIL ADDRESS" 
              className="bg-[#002B28] rounded-xl px-5 py-4 text-white font-phudu outline-none placeholder-[#EBEBEB] w-full sm:w-[320px] shadow-[inset_0_0_0_1px_#EBEBEB] text-base md:text-lg"
              required
            />
            <button 
              type="submit" 
              className="bg-[#F5DA2A] text-[#002B28] font-phudu font-bold text-lg rounded-xl px-8 py-4 hover:opacity-90 transition-opacity whitespace-nowrap uppercase"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-24 text-[#EBEBEB] pt-4" data-reveal>
          
          {/* Menu */}
          <div className="flex flex-col gap-6">
            <h4 className="text-white text-lg font-medium font-phudu">Menu</h4>
            <ul className="flex flex-col gap-5">
              <li><a href="#" className="font-inter uppercase text-[15px] hover:text-white transition-colors tracking-wide font-medium">Home</a></li>
              <li><a href="#about" className="font-inter uppercase text-[15px] hover:text-white transition-colors tracking-wide font-medium">About Us</a></li>
              <li><a href="#services" className="font-inter uppercase text-[15px] hover:text-white transition-colors tracking-wide font-medium">Service</a></li>
              <li><a href="#blog" className="font-inter uppercase text-[15px] hover:text-white transition-colors tracking-wide font-medium">Blog</a></li>
              <li><a href="#pricing" className="font-inter uppercase text-[15px] hover:text-white transition-colors tracking-wide font-medium">Pricing</a></li>
            </ul>
          </div>
          
          {/* Utility Pages */}
          <div className="flex flex-col gap-6">
            <h4 className="text-white text-lg font-medium font-phudu">Utility Pages</h4>
            <ul className="flex flex-col gap-5">
              <li><a href="#privacy" className="font-inter uppercase text-[15px] hover:text-white transition-colors tracking-wide font-medium">Privacy policy</a></li>
              <li><a href="#terms" className="font-inter uppercase text-[15px] hover:text-white transition-colors tracking-wide font-medium">Terms & conditions</a></li>
              <li><a href="#coming-soon" className="font-inter uppercase text-[15px] hover:text-white transition-colors tracking-wide font-medium">Coming soon</a></li>
              <li><a href="#404" className="font-inter uppercase text-[15px] hover:text-white transition-colors tracking-wide font-medium">404</a></li>
            </ul>
          </div>
          
          {/* Contact us */}
          <div className="flex flex-col gap-6">
            <h4 className="text-white text-lg font-medium font-phudu">Contact us</h4>
            <ul className="flex flex-col gap-6">
              <li className="flex items-center gap-4">
                <svg viewBox="0 -960 960 960" className="w-[18px] h-[18px] fill-current shrink-0">
                  <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12Z" />
                </svg>
                <a href="tel:+1-307-285-7290" className="font-inter uppercase text-[15px] hover:text-white transition-colors tracking-wide font-medium">+1-307-285-7290</a>
              </li>
              <li className="flex items-center gap-4">
                <svg viewBox="0 -960 960 960" className="w-[18px] h-[18px] fill-current shrink-0">
                  <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280 320-200v-80L480-520 160-720v80l320 200Z" />
                </svg>
                <a href="mailto:hello@laundrease.com" className="font-inter uppercase text-[15px] hover:text-white transition-colors tracking-wide font-medium">hello@laundrease.com</a>
              </li>
              <li className="flex items-start gap-4">
                <svg viewBox="0 -960 960 960" className="w-5 h-5 fill-current shrink-0 mt-0.5">
                  <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 400Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Z" />
                </svg>
                <span className="font-inter uppercase text-[15px] tracking-wide leading-[22px] font-medium">
                  6391 ELGIN ST. CELINA,<br />
                  DELAWARE 10299
                </span>
              </li>
            </ul>
          </div>
          
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col gap-10 pt-6 w-full mt-4">
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-10 w-full">
            {/* Logo */}
            <div className="flex items-center gap-3" data-reveal="slide-right">
              {/* Graphic Icon SVG replica */}
              <svg width="40" height="30" viewBox="0 0 72 48" className="fill-white w-10 h-8 md:w-[48px] md:h-[32px]">
                <path d="M33.8891 9.44256C36.9532 8.99493 40.0174 8.76106 43.0816 8.76106C46.1458 8.76106 49.2099 8.99493 52.2741 9.44256C58.1147 10.3117 62.5902 14.8802 65.2536 20.3159C66.5772 23.0125 67 25.8672 67 28.7845V43C67 44.1046 66.1046 45 65 45H11C9.89543 45 9 44.1046 9 43V28.7845C9 25.8672 9.42277 23.0125 10.7464 20.3159C13.4098 14.8802 17.8853 10.3117 23.7259 9.44256C27.1009 8.94042 30.5054 8.94042 33.8891 9.44256Z" fill="white"/>
                <circle cx="38" cy="27" r="7" fill="#002B28"/>
              </svg>
              <span className="font-phudu font-bold text-3xl md:text-[32px] text-white tracking-tight -mb-1">laundrease</span>
            </div>

            {/* Social Buttons */}
            <div className="flex flex-wrap justify-center items-center gap-4" data-reveal="slide-left">
              <a href="#" className="flex items-center gap-2.5 bg-[#2E5246] px-5 py-3 rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#396254]">
                <img src="https://framerusercontent.com/images/7MYmpUe9Sxku5PwNa1MlNy1pv8.svg" alt="Twitter" className="w-[18px] h-[18px]" />
                <span className="text-white font-inter font-medium text-[15px]">Twitter</span>
              </a>
              <a href="#" className="flex items-center gap-2.5 bg-[#2E5246] px-5 py-3 rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#396254]">
                <img src="https://framerusercontent.com/images/ZJuncQi2X7nSeVluprUbnZsNFI.svg" alt="Facebook" className="w-[18px] h-[18px]" />
                <span className="text-white font-inter font-medium text-[15px]">Facebook</span>
              </a>
              <a href="#" className="flex items-center gap-2.5 bg-[#2E5246] px-5 py-3 rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#396254]">
                <img src="https://framerusercontent.com/images/hNoNzWZN6DgFjKS319VAzVSJE.svg" alt="Instagram" className="w-[18px] h-[18px]" />
                <span className="text-white font-inter font-medium text-[15px]">Instagram</span>
              </a>
            </div>
          </div>

          {/* Copyright Divider & Text */}
          <div className="flex flex-col gap-6">
            <div className="w-full h-px bg-white/[0.15]"></div>
            
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white font-inter text-sm md:text-[15px] opacity-90 pb-2">
              <p>Copyright &copy; 2022 Laundrease.</p>
              <p>
                Proudly created with <a href="https://grabui.com/" className="hover:text-[#F5DA2A] transition-colors underline-offset-4 ml-1">Grabui</a>
              </p>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}
