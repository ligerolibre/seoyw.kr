import Footer from './components/footer'
import Navbar from './components/nav'
import './globals.css'
import { Noto_Sans_KR } from 'next/font/google'

const Noto_Sans_kr = Noto_Sans_KR({
  subsets: ['latin'],
  weight: '500'
})

export const metadata = {
  title: 'seoyw.kr',
  description: '풀스택 개발자 서영우의 사이트',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={Noto_Sans_kr.className}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
