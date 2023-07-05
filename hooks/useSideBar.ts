import { useEffect, useState } from "react"


const useSideBar = () => {
    const [search , setSearch ] = useState("")
    const [isOpen ,setIsOpen] = useState(true)
   let previousTime = new Date().getTime()


    const searchForTask = (length : number) => {

        setTimeout( () => {
            console.log(length ,search.length);
            
            
        }, 500);    
 
    }

    useEffect(() => {
       if(search) {
            searchForTask(search.length)
       }
        // eslint-disable-next-line
    } , [search])

    return {
        search , 
        setSearch ,
        isOpen , 
        setIsOpen
    }

}


export default useSideBar