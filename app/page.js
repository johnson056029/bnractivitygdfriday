'use client'
import dynamic from 'next/dynamic'
import EmailGate from '@/components/EmailGate'

const StarScene = dynamic(() => import('@/components/StarScene'), { ssr: false })
const ImageScroll = dynamic(() => import('@/components/ImageScroll'), { ssr: false })

export default function Home() {
  return (
    <>
      <EmailGate />
      <StarScene />
      <ImageScroll />
    </>
  )
}
