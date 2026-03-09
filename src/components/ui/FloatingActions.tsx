import { MessageSquare, ExternalLink, X } from 'lucide-react'

const FloatingActions = () => {
  return (
    <div className="fixed bottom-14 right-4 z-40 flex flex-col items-end gap-3 font-outfit sm:right-6">
      
      {/* Template badge 1 */}
      <button className="flex h-[44px] items-center gap-2 rounded-[10px] bg-black px-4 text-[11px] font-bold text-white shadow-[0_6px_18px_rgba(0,0,0,0.25)]">
        <span>Get this template</span>
        <ExternalLink className="h-3.5 w-3.5" />
      </button>

      {/* Template badge 2 */}
      <button className="flex h-[44px] items-center gap-2 rounded-[10px] bg-[#7449ef] px-4 text-[11px] font-bold text-white shadow-[0_6px_18px_rgba(116,73,239,0.35)]">
        <span>Unlock 35+ Templates</span>
        <div className="flex -space-x-1">
          <div className="h-4 w-4 rounded-sm border-2 border-white/50 bg-white/20"></div>
          <div className="h-4 w-4 rounded-sm border-2 border-white/50 bg-white/20"></div>
        </div>
      </button>

      {/* Customization tooltip */}
      <div className="group relative flex items-center">
        <div className="flex items-center gap-3 rounded-[12px] border border-[#e6e8e7] bg-white p-3 pr-4 shadow-[0_6px_18px_rgba(0,0,0,0.14)]">
          <div className="h-2.5 w-2.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]"></div>
          <div className="flex flex-col text-[11px] leading-tight">
            <span className="font-medium text-gray-800">Need to customize this template?</span>
            <span className="font-semibold text-red-500">Hire our Framer team!</span>
          </div>
        </div>
      </div>

      {/* Get connected button */}
      <div className="flex w-full flex-col items-end gap-3">
         <button className="flex h-[44px] items-center gap-2 rounded-[10px] bg-[#0ea24d] px-4 text-[11px] font-bold text-white shadow-[0_6px_18px_rgba(14,162,77,0.35)]">
          <span>Get connected with us</span>
          <MessageSquare className="h-3.5 w-3.5 fill-current" />
        </button>
        <button className="flex h-12 w-12 items-center justify-center rounded-[12px] border border-[#e6e8e7] bg-white text-gray-500 shadow-[0_6px_18px_rgba(0,0,0,0.14)]">
          <X className="h-4 w-4" />
        </button>
      </div>

    </div>
  )
}

export default FloatingActions
