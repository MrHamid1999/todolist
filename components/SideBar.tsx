"use client"
import useSideBar from "@/hooks/useSideBar"
import {Menu} from "react-feather"
import SearchBox from "./SearchBox"
const SideBar = () => {

    const {
        search , 
        setSearch , 
        isOpen , 
        setIsOpen
    } = useSideBar()

    const Icon = () => {

        return (
            <span onClick={() => setIsOpen(!isOpen)}>
                <Menu className="stroke-neutral-500" />
            </span>
        )
    }

  return (
        <>
            {isOpen ? 
            <section className={`${isOpen ? "" : "hidden"} w-screen  z-50 absolute md:static md:w-1/4 h-screen text-neutral-900`}>
    
                <div className="m-3 h-full bg-neutral-100 rounded-xl px-2 py-4">
                    <div className="flex justify-between">
                      <span className="font-bold">Menu</span>
                      <Icon />
                    </div>
                    <div>
                    <SearchBox 
                        value={search} 
                        setValue={setSearch}  
                        className="w-full bg-inherit outline-none border border-neutral-200 placeholder:text-neutral-500 font-semibold rounded-md mt-4 py-1 pl-10 "
                        />
                    </div>
                </div>
            </section> 
            :
            <div className="px-10 mt-10 ">
                <Icon />
            </div>
            }
        </>
  )
}

export default SideBar