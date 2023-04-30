import { ChevronLeft, ChevronRight } from "lucide-react";

export function Buttons() {
    return(
        <div className='flex items-center gap-5'>
        <button className='p-1 rounded-full bg-black/50 hover:bg-white/20'>
          <ChevronLeft/>
        </button>

        <button className='p-1 rounded-full bg-black/50 hover:bg-white/20'>
        <ChevronRight/>
        </button>
      </div>
    )
}