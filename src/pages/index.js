import { Inter } from 'next/font/google'
import useItems from '../hooks/useItems'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { data, isLoading } = useItems.useFetchItems()

  if (isLoading) return <div>Loading...</div>
  return (
    <main className={`flex min-h-screen flex-col items-center justify-center p-24 ${inter.className}`}>
      <div>
        {data.map((item) => (
          <Link href={`/${item.id}`}>
            <div key={item.id} className="flex items-center rounded-sm p-2 border border-red-500 justify-center text-neutral-100 ">
              <span className="">{item.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}
