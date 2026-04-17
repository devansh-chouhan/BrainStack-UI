import axios from "axios";
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";

export const useSetting = () => {
    const [username , setUsername] = useState("");
    const [sharable , setSharable] = useState(false);


    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/settings` , {
            headers:{
                "Authorization":localStorage.getItem("token")
            }
        })
        .then((res) => {
            setUsername(res.data.username)
            setSharable(res.data.sharable)
        })
    } , [sharable]);

    return {username , sharable}
}