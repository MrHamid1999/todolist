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
     await loginUserInfo(values.userName)
            .then(res => {
                if(res[0]?.password === values.password) {
                    const todoList = {
                        user : res[0] 
                    }
                    localStorage.setItem("todoList" , JSON.stringify(todoList))
                    router.push("/tasks")
                }else{
                    return toast.error("userName or password is incorrect")
                }
            })
            .catch(err => {
                toast.error("server is not responding") 
            })


        
    }
    return {
        initialValues ,
        login , 

    }
}