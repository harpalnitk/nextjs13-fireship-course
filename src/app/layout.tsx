import Link from 'next/link'
import './globals.css';


export const metadata = {
  title: 'Nextjs 13 fireship course',
  description: ' A tutorial on nextjs 13 by fireship using pocketbase database',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main>
          <nav>
            <Link href='/'>
              Home
              </Link>
              <Link href='/notes'>
              Notes
              </Link>
              <Link href='/routing'>
              Routing
              </Link>
          </nav>
          {children}
        </main>
        </body>
    </html>
  )
}
