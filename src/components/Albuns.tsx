import { Play } from "lucide-react";
import Image from "next/image";

export function Albuns(){
    return(
        <><h1 className='font-semibold text-3xl mt-10'>Good Afternoon</h1><div className='grid grid-cols-3 gap-4 mt-4'>
            <a href='#' className='bg-white/10 rounded flex items-center gap-4 hover:bg-white/20 transition-colors group'>
                <Image src="/pink-floyd.webp" width={100} height={100} alt="Musica" />
                <strong>The Dark Side of the Moon</strong>

                <button className='w-9 h-9 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                    <Play />
                </button>
            </a>
            <a href='#' className='bg-white/10 rounded flex items-center gap-4 hover:bg-white/20 transition-colors group'>
                <Image src="/pink-floyd.webp" width={100} height={100} alt="Musica" />
                <strong>The Dark Side of the Moon</strong>

                <button className='w-9 h-9 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                    <Play />
                </button>
            </a>
            <a href='#' className='bg-white/10 rounded flex items-center gap-4 hover:bg-white/20 transition-colors group'>
                <Image src="/pink-floyd.webp" width={100} height={100} alt="Musica" />
                <strong>The Dark Side of the Moon</strong>

                <button className='w-9 h-9 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                    <Play />
                </button>
            </a>
            <a href='#' className='bg-white/10 rounded flex items-center gap-4 hover:bg-white/20 transition-colors group'>
                <Image src="/pink-floyd.webp" width={100} height={100} alt="Musica" />
                <strong>The Dark Side of the Moon</strong>

                <button className='w-9 h-9 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                    <Play />
                </button>
            </a>
            <a href='#' className='bg-white/10 rounded flex items-center gap-4 hover:bg-white/20 transition-colors group'>
                <Image src="/pink-floyd.webp" width={100} height={100} alt="Musica" />
                <strong>The Dark Side of the Moon</strong>

                <button className='w-9 h-9 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                    <Play />
                </button>
            </a>
            <a href='#' className='bg-white/10 rounded flex items-center gap-4 hover:bg-white/20 transition-colors group'>
                <Image src="/pink-floyd.webp" width={100} height={100} alt="Musica" />
                <strong>The Dark Side of the Moon</strong>

                <button className='w-9 h-9 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                    <Play />
                </button>
            </a>


        </div></>
    )
}