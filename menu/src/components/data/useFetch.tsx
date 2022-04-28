import { useEffect, useState } from "react"
import {Modal} from "./type"

const useFetch = (url:string) => {
    const [data,setData] = useState<Modal[]>([])
    const [newData,setNewData] = useState<Modal>({id:0,title:"",price:0,img:"",alt:"",quantity:0})
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
        return {data,error,newData}
}

export default useFetch