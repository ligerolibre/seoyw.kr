import Footer from './components/footer'
import Navbar from './components/nav'
import './globals.css'

export const metadata = {
  title: 'Seoyw.kr :: The Developer',
  description: '풀스택 개발자 서영우의 사이트',
  applicationName: 'seoyw.kr',
  keywords: ['Next.js', 'React', 'JavaScript', 'Flutter', 'Developer'],
  creator: 'Seoyoungwoo',
  publisher: 'Seoyoungwoo',
  openGraph: {
    title: 'Seoyw.kr :: 개발자 서영우',
    description: '풀스택 개발자 서영우의 사이트',
    url: 'https://seoyw.kr',
    siteName: 'seoyw.kr',
    locale: 'ko-KR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
