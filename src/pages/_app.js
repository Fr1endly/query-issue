import React, {useEffect} from 'react'
import '@/styles/globals.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

export default function App({ Component, pageProps }) {
  const qClient = new QueryClient()
  return (
    <QueryClientProvider client={qClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}
