import FoodCard from "../molecules/FoodCard"
import { useRouter } from 'next/navigation'

export default function MenuSession({session})
{
    const router = useRouter();
    return (
        <div>
            <span className='mx-2 py-2 text-lg font-bold font-main'>
                {session.name}
            </span>
            <div className='flex flex-col divide-y'>
                {session.items.map(item => {
                    return <FoodCard
                        key={item.id}
                        item={item}
                    />
                })}
            </div>
        </div>
    )
}