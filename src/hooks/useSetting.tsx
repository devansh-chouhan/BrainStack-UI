import axios from "axios";
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";

export const useSetting = () => {
    const [username, setUsername] = useState("");
    const [sharable, setSharable] = useState(false);
    const [loading, setLoading] = useState(false);

    const fetchSettings = () => {
        axios.get(`${BACKEND_URL}/api/v1/settings`, {
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        })
        .then((res) => {
            setUsername(res.data.username);
            setSharable(res.data.sharable);
        })
        .catch(err => console.error("Error fetching settings:", err));
    };

    useEffect(() => {
        fetchSettings();
    }, []);

    const toggleSharing = async (share: boolean) => {
        setLoading(true);
        try {
            await axios.post(`${BACKEND_URL}/api/v1/brain/share`, 
                { share }, 
                {
                    headers: {
                        "Authorization": localStorage.getItem("token")
                    }
                }
            );
            setSharable(share);
        } catch (error) {
            console.error("Error toggling sharing:", error);
        } finally {
            setLoading(false);
        }
    };

    return { username, sharable, toggleSharing, loading, refresh: fetchSettings };
};