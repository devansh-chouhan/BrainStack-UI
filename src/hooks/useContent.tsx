import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config"
import axios from "axios"

export const useContent = () => {
    const [contents , setContents] = useState([])

    function refresh(){
        axios.get(`${BACKEND_URL}/api/v1/content` , {
            headers:{
                "Authorization": localStorage.getItem("token")
            }
        }).then((res) => setContents(res.data.allContent))
    }

    useEffect(() => {
        refresh()
        const timer = setInterval(() => {
            refresh()
        } , 10 * (1000))

        return () => clearInterval(timer)
    } , [])

    return {contents, refresh }
}