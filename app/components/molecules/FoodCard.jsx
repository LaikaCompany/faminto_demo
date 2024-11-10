import { OrderCarContext } from "@/app/context/OrderCar";
import { randomUUID } from "crypto";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useMemo } from "react";

export default function FoodCard({item})
{
    const [orderCard, addToCard, removeFromCard] = useContext(OrderCarContext);
    const router = useRouter()


    
    const items = useMemo(() => {
        return orderCard?.filter(product => product?.productId === item.id) ?? []
    },[orderCard])

    const onClickMore = () => {
        return router.push(`menu/prato?id=${item.id}`)
    }

    const onClickMinus = () => {
        const lastAdded = items[items.length - 1]
        removeFromCard(lastAdded.id)
    }

    return (
        <div className="flex gap-4 w-full justify-between  p-4">
            <img src='/images/beef-burguer.jpg' alt="back" className='w-32 h-32 rounded-lg'/>
            <div>
                <span className="text-lg font-semibold font-main">
                    {item.name}
                </span>
                <div className="text-base">
                    {item.description}
                </div>
                <div className="flex justify-between">
                    <span className="text-famintoGray font-semibold">{item.price}</span>
                    <div className="flex items-center justify-between gap-x-1 border-[0.5px] border-gray-400 rounded w-16">
                        <div onClick={onClickMinus} className="flex items-center justify-center p-1.5 border-r-[0.5px] border-gray-400">
                            -
                        </div >
                        <div>{items.length}</div>
                        <div onClick={onClickMore} className="flex items-center justify-center p-1.5 border-l-[0.5px] border-gray-400">
                            +
                        </div>
                    </div>
   
                </div>
            </div>
            
        </div>
    )
}