import { useEffect, useState } from "react"
type Menu = {
    id:number 
    title: string
    price: number
    img: string
    alt: string
}
const useFetch = (url:string) => {
    const [data,setData] = useState<Menu[]>([])
    const [error, setError] = useState<string>("")
    useEffect(()=>{
        fetch(url)
        .then(res => {
            if(!res.ok){
                throw Error("could not fetch data from the resource")
            }
            return res.json()})
        .then(data => setData(data))
        .catch(err => setError(err.message))
    }
        ,[url])
        return {data,error}
}

export default useFetch