import { HomeIcon, Search, Library } from "lucide-react";

export function Sidebar(){
    return(
        <aside className="w-64 bg-zinc-950 p-6">
        <div className='flex items-center gap-2'>
          <div className='w-3 h-3 bg-red-500 rounded-full'></div>
          <div className='w-3 h-3 bg-yellow-500 rounded-full'></div>
          <div className='w-3 h-3 bg-green-500 rounded-full'></div>

        </div>
          <nav className='space-y-5 mt-10'>
            <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
              <HomeIcon/>
              Home
            </a>
            <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
              <Search/>
              Search
            </a>
            <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
              <Library/>
              Your Library
            </a>
          </nav>
          
          <nav className='flex flex-col gap-2 mt-6 pt-6 border-t border-zinc-800'>
            <a href="#" className='text-sm text-zinc-400 hover:text-zinc-100'>
              Deep House
            </a>
            <a href="#" className='text-sm text-zinc-400 hover:text-zinc-100'>
             EDM
            </a>
            <a href="#" className='text-sm text-zinc-400 hover:text-zinc-100'>
              Jazz Vibes
            </a>
            <a href="#" className='text-sm text-zinc-400 hover:text-zinc-100'>
             Love Song
            </a>
            <a href="#" className='text-sm text-zinc-400 hover:text-zinc-100'>
              Velho mas ouro 
            </a>
            <a href="#" className='text-sm text-zinc-400 hover:text-zinc-100'>
              Açai com banana 
            </a>
            <a href="#" className='text-sm text-zinc-400 hover:text-zinc-100'>
             O inicio do fim
            </a>
            <a href="#" className='text-sm text-zinc-400 hover:text-zinc-100'>
              Seu madruga veste preto
            </a>
          </nav>

      </aside>
    )
}