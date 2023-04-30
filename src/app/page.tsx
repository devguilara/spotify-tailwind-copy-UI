import { Albuns } from '@/components/Albuns'
import { Buttons } from '@/components/Buttons'
import { DailyMix } from '@/components/DailyMix'
import { Footer } from '@/components/Footer'
import { Sidebar } from '@/components/Sidebar'

export default function Home() {
  return (
  <main>
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
      <Sidebar/>
        <main className="flex-1 p-6 mb-10">
          <Buttons/>
          <Albuns />
          <DailyMix/>
        </main>
      </div>
     <Footer/>
    </div>

  </main>
  )
}
