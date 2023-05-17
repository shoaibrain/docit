import Image from 'next/image'
import DataIntake from './components/DataIntake'
import DataOut from './components/DataOut'
export default function Home() {
  return (
    <main className="relative isolate px-6 pt-14 lg:px-8">
      
      <div className="relative flex place-items-center">
       
       <h1>doccIt</h1>
      </div>

      <div className=" min-h-screen grid text-center lg:mb-0 lg:grid-cols-2 gap-3 p-4">

       <div className='bg-green-200 h-4/5'>
       <DataIntake />
       </div>

       <div className='bg-yellow-200 h-4/5'>
        <DataOut />
       </div>
      </div>
    </main>
  )
}
