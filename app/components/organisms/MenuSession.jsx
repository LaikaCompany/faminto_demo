import FoodCard from "../molecules/FoodCard"

export default function MenuSession({session, onSelectItem})
{
    return (
        <div>
            <span className='mx-2 py-2 text-lg font-semibold font-main text-mainBrown'>{session.name}</span>
            <div className='flex flex-col divide-y'>
                {session.items.map(item => <FoodCard key={item} onSelectItem={onSelectItem}/> )}
            </div>
        </div>
    )
}