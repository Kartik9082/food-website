import { useState, useEffect } from "react";


const isOnline = () => {
    const [isOnline, setIsOnline] = useState(true);

    useEffect(()=>{

        const handleOnline = () => {
            setIsOnline(true);
        }
        const handleIsOffline = () => {
            setIsOnline(false);
        }

        window.addEventListener("online", handleOnline)
        window.addEventListener("offline", handleIsOffline);


        return () =>{
            window.removeEventListener("online", handleOnline)
            window.removeEventListener("offline", handleIsOffline)
        }



    },[])

    return isOnline;
}

export default isOnline;