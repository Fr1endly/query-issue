import { useRouter } from "next/router"
import useItems from "@/hooks/useItems"
import Link from "next/link"

export default () => {
    const router = useRouter()
    const { id } = router.query
    const { data, isLoading } = useItems.useFetchItem(Number(id))

    if (isLoading) return <div>Loading...</div>

    return (
        <div className="min-h-screen flex justify-center items-center">
            <Link href="/">
                <span className="absolute left-0 top-0 text-white">BACK</span>
            </Link>

            <div className="flex flex-col items-center">
                <div className="flex items-center rounded-sm p-2 border border-red-500 justify-center text-neutral-100 ">
                    <span className="">{data.name}</span>
                    <span className="ml-2">{data.color}</span>
                </div>
            </div>
        </div>
    )
}