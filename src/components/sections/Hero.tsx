import videoSrc from '../../assets/videos/loundaryvideo.mp4';
import avatar1 from '../../assets/images/iocn1.jpg';
import avatar2 from '../../assets/images/icon2.jpg';
import avatar3 from '../../assets/images/icon3.png';
import avatar4 from '../../assets/images/icon4.jpg';

export function Hero() {
  return (
    <section className="overflow-hidden bg-bg-light pb-24 pt-8 lg:pt-14">
      <div className="mx-auto w-full max-w-[1240px] px-6">
        <div className="grid items-center gap-14 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="max-w-[560px]">
            <h1
              className="font-phudu text-[56px] leading-[0.98] font-extrabold tracking-tight text-primary lg:text-[68px]"
              data-reveal="slide-right"
            >
              EFFORTLESS
              <br />
              LAUNDRY CARE,
              <br />
              <span className="mt-2 inline-block rounded-[10px] bg-secondary px-4 py-2">
                ANYPLACE
              </span>
            </h1>

            <p className="mt-7 max-w-[470px] text-[17px] leading-[1.5] text-tertiary" data-reveal="slide-right">
              Experience the ultimate convenience with eco-friendly &amp; reliable laundry services.
            </p>

            <button
              className="mt-8 h-[52px] rounded-[14px] bg-secondary px-6 text-[15px] font-semibold uppercase tracking-tight text-primary transition-transform duration-300 hover:-translate-y-0.5"
              data-reveal="slide-right"
            >
              SCHEDULE A PICKUP
            </button>

            <div className="mt-10 flex items-center gap-4" data-reveal="slide-right">
              <div className="flex -space-x-3">
                {[avatar1, avatar2, avatar3, avatar4].map((avatar, i) => (
                  <div key={i} className="h-11 w-11 overflow-hidden rounded-full border-2 border-bg-light">
                    <img src={avatar} alt={`user-${i}`} className="h-full w-full object-cover" />
                  </div>
                ))}
              </div>
              <div className="leading-tight">
                <p className="flex items-center gap-1 text-[15px] font-bold text-primary">
                  4.8+ <span className="text-[13px] text-secondary">&#9733;</span> RATING
                </p>
                <p className="mt-1 text-[13px] text-primary">Satisfied Customer</p>
              </div>
            </div>
          </div>

          <div className="relative h-[420px] overflow-hidden rounded-[30px] lg:h-[520px]" data-reveal="slide-left">
            <video
              src={videoSrc}
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="animate-float animate-pulse-soft flex h-[58px] w-[58px] items-center justify-center rounded-full bg-secondary">
                <svg className="ml-[2px] h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

