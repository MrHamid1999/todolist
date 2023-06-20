import loginUserInfo from "@/lib/users"
import { useRouter } from "next/navigation"
import { toast } from "react-toastify"
import { User } from "@/types/user"



export const useLogin = () => {
    const router = useRouter()
    const initialValues = {
        userName : "" , 
        password : ""
    }

    const login = async( values : Pick<User , "userName" | "password" >  ) => {

        if(!values.userName || !values.password) return toast.error("please fill out all of the fields")
        
        // this api gets the use who has the same userName
        const user = await loginUserInfo(values.userName)
        if(user[0]?.password === values.password) {
            router.push("/")
        }else{
            return toast.error("userName or password is incorrect")
        }

        
    }
    return {
        initialValues ,
        login , 

    }
}