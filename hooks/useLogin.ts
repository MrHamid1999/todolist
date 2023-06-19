import loginUserInfo from "@/lib/login"
import { useRouter } from "next/navigation"
import { toast } from "react-toastify"
import { FormikValues } from "formik"



export const useLogin = () => {
    const router = useRouter()
    const initialValues = {
        username : "" , 
        password : ""
    }

    const login = async( values : FormikValues ) => {

        if(!values.username || !values.password) return toast.error("please fill out all of the fields")
        
        // this api gets the use who has the same username
        const user = await loginUserInfo(values.username)
        if(user[0]?.password === values.password) {
            router.push("/")
        }else{
            return toast.error("username or password is incorrect")
        }

        
    }
    return {
        initialValues ,
        login , 

    }
}