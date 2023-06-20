import { User } from "@/types/user";
import { baseRequest } from "./config";

const addUser = async (user : Omit<User , "id">) => {
    const addUserToList = await baseRequest.post("users" , {user} )
    .then(res => res.data)

    return addUserToList
}

export default addUser