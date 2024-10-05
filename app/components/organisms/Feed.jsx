import RestaurantCard from "../molecules/RestaurantCard"
import CategoriesCarousel from "./CategoriesCarousel"

export default function Feed()
{
    return(
        <div>
            <CategoriesCarousel/>
            <div className="mx-4 my-2">
                <RestaurantCard/>
            </div>
        </div>
    )
}