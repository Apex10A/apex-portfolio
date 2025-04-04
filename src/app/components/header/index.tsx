// page.tsx or layout.tsx
import { Suspense } from 'react'
import dynamic from 'next/dynamic'

const NavigationClient = dynamic(() => import('./Navigation'), {
  ssr: false,
  loading: () => <div>Loading navigation...</div>
})

export default function Layout() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NavigationClient />
    </Suspense>
  )
}