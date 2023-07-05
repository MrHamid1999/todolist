import { User } from '@/types/user'

import { baseRequest } from './config'

const usersList =async  (userName ?: string | null) => {
    
    const usersData :Promise<User[]> =await  baseRequest.get('users' , {params : {userName}})
        .then(res => res.data)
        .catch(err => console.log(err))
    

    return usersData
}

export default usersList
