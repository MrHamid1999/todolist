import { User } from '@/types/user'
import axios from 'axios'
import { baseRequest } from './config'

const usersList =async  (userName ?: string | null) => {
    
    const usersData :Promise<User[]> =await  baseRequest.get('users' , {params : {userName}}).then(res => res.data)
    

    return usersData
}

export default usersList
