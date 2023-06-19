import AuthPageContainer from '@/components/AuthPageContainer'
import { Inter } from 'next/font/google'
import Image from "next/image"
import UserPageImage from './Image'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Todo List',
  description: 'first Page ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className='w-full h-screen flex  p-2.5 '> 
        <section className='w-1/2 hidden md:flex'>
            <UserPageImage />
        </section>
        <section className='md:w-1/2 w-full' >
            <AuthPageContainer>
                {children}
            </AuthPageContainer>
        </section>
    </main>
  )
}
