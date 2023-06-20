import addUser from "@/lib/addUser"
import { User } from "@/types/user"
import { FormikValues } from "formik"
import { useRouter } from "next/navigation"
import { toast } from "react-toastify"


const useSignup = (users : User[]) => {
    const router = useRouter()
    const initialValues = {
        userName : "" , 
        firstName : "" , 
        lastName : "" , 
        email : "" , 
        password : "" , 
    }


    const signup  = async(values : Omit<User , "id">) => {
        
        const errors: string[] = []
        
        // checks if all the fields has been completed
        const notValid = !values.userName || !values.firstName || !values.lastName || !values.email || !values.password ;
        if (notValid) return toast.error("please fill out all the fields")

        // checks if the user already exists
        users.forEach(user => {
            if(user.userName === values.userName) return errors.push("this username already exist")
            if(user.email === values.email) return errors.push("this email already exist")

        })
        if(errors.length > 0 ) return toast.error(errors[0])
        const user : Omit<User , "id"> = {
            userName : values.userName,
            firstName : values.firstName,
            lastName : values.lastName,
            email: values.email,
            password: values.password
        }
        await addUser(user)
        .then(() => router.push("/") )
        .catch(() => toast.error("there has been an error"))
    }

    return {
        initialValues , 
        signup
    }
}

export default useSignup