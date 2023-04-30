import Image from "next/image";

export function DailyMix(){
    return(
        <><h2 className='font-semibold text-3xl mt-10'>Made for Guilherme Lara</h2><div className='grid grid-cols-5 mt-4 gap-4'>

            <a href='#' className='bg-white/5 p-5 rounded-md flex flex-col gap-2 hover:bg-white/10 '>
                <Image className='w-full' src="/pink-floyd.webp" width={100} height={100} alt="Musica" />
                <strong className='font-semibold'>Daily Mix 1</strong>
                <span className='text-sm text-zinc-400'>Oficina G3, Resgate, Rodolfo Abrantes, Nivea Soares, ForToday....</span>
            </a>

            <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10 '>
                <Image className='w-full' src="/pink-floyd.webp" width={100} height={100} alt="Musica" />
                <strong className='font-semibold'>Daily Mix 1</strong>
                <span className='text-sm text-zinc-400'>Oficina G3, Resgate, Rodolfo Abrantes, Nivea Soares, ForToday.... </span>
            </a>

            <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10 '>
                <Image className='w-full' src="/pink-floyd.webp" width={100} height={100} alt="Musica" />
                <strong className='font-semibold'>Daily Mix 1</strong>
                <span className='text-sm text-zinc-400'>Oficina G3, Resgate, Rodolfo Abrantes, Nivea Soares, ForToday.... </span>
            </a>

            <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10 '>
                <Image className='w-full' src="/pink-floyd.webp" width={100} height={100} alt="Musica" />
                <strong className='font-semibold'>Daily Mix 1</strong>
                <span className='text-sm text-zinc-400'>Oficina G3, Resgate, Rodolfo Abrantes, Nivea Soares, ForToday.... </span>
            </a>

            <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10 '>
                <Image className='w-full' src="/pink-floyd.webp" width={100} height={100} alt="Musica" />
                <strong className='font-semibold'>Daily Mix 1</strong>
                <span className='text-sm text-zinc-400'>Oficina G3, Resgate, Rodolfo Abrantes, Nivea Soares, ForToday.... </span>
            </a>


        </div></>
    )
}