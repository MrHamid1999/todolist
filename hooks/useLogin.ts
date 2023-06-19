import loginUserInfo from "@/lib/login"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { toast } from "react-toastify"
export const useLogin = () => {
    const [userName , setUserName] = useState("")
    const [password ,setPassword] = useState("")
    const [loading , setLoading] = useState(false)
    const router = useRouter()

    const login = async(e : React.FormEvent<HTMLFormElement>) => {
        setLoading(true)
        e.preventDefault()
        if(!userName || !password) return

        const user = await loginUserInfo(userName)
        if(user[0].password === password) {
            toast.success("you were logged in" )
            router.push("/")
        }
        
        setLoading(false)
    }
    return {
        userName , 
        setUserName , 
        password , 
        setPassword , 
        login , 
        loading
    }
}