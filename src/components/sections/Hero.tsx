import { useEffect, useRef, useState } from 'react'
import { Play, Star } from 'lucide-react'
import icon1 from '../../assets/images/icon1.jpg'
import icon2 from '../../assets/images/icon2.jpg'
import icon4 from '../../assets/images/icon4.jpg'
import laundryVideo from '../../assets/videos/loundaryvideo.mp4'

const avatars = [icon1, icon2, icon4]

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [showAnytime, setShowAnytime] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setShowAnytime((prev) => !prev)
    }, 2500)

    return () => clearInterval(interval)
  }, [])

  const handlePlayClick = async () => {
    if (!videoRef.current) return
    try {
      await videoRef.current.play()
      setIsPlaying(true)
    } catch {
      setIsPlaying(false)
    }
  }

  const handleMouseLeave = () => {
    if (!videoRef.current) return
    videoRef.current.pause()
    setIsPlaying(false)
  }

  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-[1180px] items-center gap-10 px-4 pb-16 pt-14 sm:px-8 md:gap-14 md:pb-24 md:pt-20 lg:grid-cols-[0.96fr_1.04fr] lg:px-10 lg:pb-28 lg:pt-24">
        <div>
          <h1 className="max-w-[530px] font-extrabold text-[50px] uppercase leading-[0.95] tracking-[-0.015em] text-dark-green sm:text-[64px] lg:text-[60px]">
            <span className="block">Effortless</span>
            <span className="mt-2 block">Laundry Care,</span>
            <span className="mt-2 w-[300px] h-[80px]  inline-block rounded-[8px]  bg-primary-yellow px-3.5 pb-2 pt-1.5">
              <span className="relative block h-[1.02em] min-w-[220px] overflow-hidden">
                <span
                  className={` absolute inset-0 normal-case transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    showAnytime
                      ? '-translate-y-[115%] opacity-0'
                      : 'translate-y-0 opacity-100'
                  }`}
                >
                  Anyplace
                </span>
                <span
                  className={`absolute inset-0 normal-case transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    showAnytime
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-[115%] opacity-0'
                  }`}
                >
                  Anytime
                </span>
              </span>
            </span>
          </h1>

          <p className="mt-7 max-w-[510px] text-[18px] font-medium leading-[1.45] text-[#3f5f5b]">
            Experience the ultimate convenience with eco-friendly &amp; reliable laundry services.
          </p>

          <button
            type="button"
            className="mt-8 h-[66px] rounded-[16px] bg-primary-yellow px-10 text-[14px] font-extrabold uppercase tracking-[0.01em] text-dark-green md:mt-10"
          >
            Schedule a Pickup
          </button>

          <div className="mt-8 flex items-center gap-4 md:mt-11">
            <div className="flex -space-x-2.5">
              {avatars.map((avatar, index) => (
                <img
                  key={avatar}
                  src={avatar}
                  alt={`Customer ${index + 1}`}
                  className="h-12 w-12 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>

            <div className="text-dark-green">
              <div className="flex items-center gap-1.5 leading-none">
                <span className="text-[28px] font-bold">4.8+</span>
                <Star className="h-4 w-4 fill-primary-yellow text-primary-yellow" />
                <span className="pt-0.5 text-[11px] font-bold uppercase tracking-wide">Rating</span>
              </div>
              <p className="mt-1 text-[16px] font-medium text-[#243f3b]">Satisfied Customer</p>
            </div>
          </div>
        </div>

        <div
          className="relative mx-auto aspect-[4/3] w-full max-w-[640px] overflow-hidden rounded-[34px]"
          onMouseLeave={handleMouseLeave}
        >
          <video
            ref={videoRef}
            src={laundryVideo}
            loop
            playsInline
            className={`h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]`}
            aria-label="Laundry service video"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              type="button"
              onClick={handlePlayClick}
              aria-label="Play video"
              className={`relative flex h-[70px] w-[70px] items-center justify-center rounded-full border border-primary-yellow bg-primary-yellow transition-all duration-500 ease-out ${
                isPlaying
                  ? 'pointer-events-none scale-75 opacity-0'
                  : 'scale-100 opacity-100'
              }`}
            >
              <span className="absolute inset-[-9px] rounded-full border border-primary-yellow/75" />
              <span className="absolute inset-[-18px] rounded-full border border-primary-yellow/45" />
              <Play className="ml-1.5 h-7 w-7 fill-dark-green text-dark-green" />
            </button>
          </div>

          {isPlaying && (
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/25 to-transparent" />
          )}
        </div>
      </div>
    </section>
  )
}

export default Hero
