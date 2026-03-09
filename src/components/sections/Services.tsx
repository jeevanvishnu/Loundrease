import service1 from "../../assets/services/service1.jpg"
import service2 from "../../assets/services/service2.jpg"
import service3 from "../../assets/services/service3.jpg"
import service4 from "../../assets/services/service4.jpg"
import service5 from "../../assets/services/service5.jpg"
import service6 from "../../assets/services/service6.jpg"

const services = [
  {
    title: "WASH & FOLD LAUNDRY SERVICES",
    description: "Experience the ultimate convenience to fit your busy life.",
    image: service1,
  },
  {
    title: "DRY CLEANING",
    description: "Expert care for fabrics and special garments requiring attention.",
    image: service2,
  },
  {
    title: "BEDDING & LINEN CLEANING",
    description: "Cleaning for sheets, comforters etc to keep them fresh and inviting.",
    image: service3,
  },
  {
    title: "IRONING SERVICES",
    description: "Keep your clothes crisp and wrinkle-free with ironing service.",
    image: service4,
  },
  {
    title: "ALTERATIONS & REPAIRS",
    description: "Tailoring to fix tears, adjust sizes the life of your garments.",
    image: service5,
  },
  {
    title: "LEATHER CLEANING",
    description: "Care for unique items like wedding dresses, curtains, and more.",
    image: service6,
  },
]

const Services = () => {
  return (
    <section className="bg-white py-32">

      <div className="max-w-7xl mx-auto px-6">

        {/* section title */}
        <div className="text-center mb-20">

          <span className="inline-block bg-yellow-300 px-5 py-1 text-lg font-medium rounded-md rotate-[-6deg]">
            Services
          </span>

          <h2 className="mt-5 text-5xl md:text-6xl font-extrabold text-[#0f3b35] leading-tight">
            Exceptional Care For <br /> Your Garments
          </h2>

        </div>

        {/* grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 justify-items-center">

          {services.map((service, index) => (

            <div
              key={index}
              className="group bg-white border border-gray-200 rounded-[26px] w-[362px] h-[487px] flex flex-col p-4"
            >

              {/* image */}
              <div className="relative overflow-hidden rounded-[20px]">

                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[360px] object-cover transition-transform duration-500 group-hover:scale-105 rounded-[20px]"
                />

                {/* arrow */}
                <div className="absolute top-3 right-3 w-9 h-9 bg-white rounded-full shadow-md flex items-center justify-center">

                  <svg
                    className="w-4 h-4 text-[#0f3b35] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10"/>
                  </svg>

                </div>

              </div>

              {/* text */}
              <div className="flex flex-col justify-end flex-grow pt-5 px-2">

                <h3 className="text-[#0f3b35] font-bold text-lg tracking-wide mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-lg leading-relaxed">
                  {service.description}
                </p>

              </div>

            </div>

          ))}

        </div>

        {/* button */}
        <div className="flex justify-center mt-20">

          <button className="relative overflow-hidden group font-semibold px-10 py-4 rounded-xl border border-yellow-400 bg-yellow-400 text-[#0f3b35] transition">

            <span className="relative z-10 transition-colors duration-300 group-hover:text-yellow-300">
              SCHEDULE A PICKUP
            </span>

            <span className="absolute inset-0 bg-[#0f3b35] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>

          </button>

        </div>

      </div>

    </section>
  )
}

export default Services