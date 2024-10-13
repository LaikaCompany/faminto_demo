'use client'
import { useRouter } from "next/navigation"
import RestaurantCard from "../molecules/RestaurantCard"
import CategoriesCarousel from "./CategoriesCarousel"
import TopBar from "../molecules/TopBar"

export default function Feed()
{
    const router = useRouter()
    return(
        <div>
            <TopBar/> 
            <CategoriesCarousel/>
            <div className="mx-4 my-2">
                <RestaurantCard onMenuClick={()=>router.push("./menu")}/>
            </div>
        </div>
    )
}