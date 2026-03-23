import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'

export const metadata = {
  title: 'Behind the Seams Baseball | Elite Hitting Development',
  description: 'Data-driven hitting programs by Joseph Kummick. Increase exit velo, power, and consistency. Former D2 player, B.S. Sports Performance.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  )
}
