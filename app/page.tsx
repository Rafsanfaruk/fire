import Banner from '@/components/banner'
import Community from '@/components/community'
import Event from '@/components/event'
import FeaturedProducts from '@/components/featuredProducts'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
     <Navbar />
     <Banner />
     <Event />
     <FeaturedProducts />
     <Community />
     <Footer />
    </div>
  )
}
