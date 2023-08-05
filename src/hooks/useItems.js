import { useQuery, useQueryClient } from "@tanstack/react-query"


const items = [
    { id: 1, name: "Item 1", color: "blue" },
    { id: 2, name: "Item 2", color: "green" },
    { id: 3, name: "Item 3", color: "red" },
    { id: 4, name: "Item 4", color: "yellow" },
]

const fakeFetchAll = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(items)
        }, 2000)
    })
}

const fakeFetchById = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(items.find((item) => item.id === id))
        }, 2000)
    })
}

const useFetchItems = () => {
    const queryClient = useQueryClient()

    return useQuery({
        queryKey: ["items"],
        queryFn: fakeFetchAll,
        onSuccess: (data) => {
            for (const item of data) {
                queryClient.setQueryData(["items", item.id], item)
            }
        },
    })
}

const useFetchItem = (id) => {
    return useQuery({
        queryKey: ["items", id],
        queryFn: () => fakeFetchById(id),
    })
}

export default {
    useFetchItems,
    useFetchItem,
}
