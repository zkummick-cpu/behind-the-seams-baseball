import { SignUp } from '@clerk/nextjs'
import Ticker from '@/components/Ticker'
import Navbar from '@/components/Navbar'

export default function SignUpPage() {
  return (
    <>
      <Ticker />
      <Navbar />
      <div className="page-wrap" style={{ background: '#F5F2ED', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '5rem 1rem' }}>
        <SignUp />
      </div>
    </>
  )
}
