import { User } from '@/types/user'
import axios from 'axios'
import { baseRequest } from './config'

const loginUserInfo =async  (userName : string | null) => {
    
    const userData :Promise<User[]> =await  baseRequest.get('users' , {params : {userName}}).then(res => res.data)
    

    return userData
}

export default loginUserInfo
