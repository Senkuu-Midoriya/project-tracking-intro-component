import Image from 'next/future/image'
import Hero from '../components/Hero'

import NavBar from '../components/NavBar'
export default function Home() {
  return (
    <div className="mainContainer">
      <NavBar/>
      <Hero/>
    </div>
  )
}
