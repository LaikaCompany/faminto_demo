import AtomButton from '../atoms/AtomButton.jsx'

export default function RestaurantCard({onMenuClick})
{
    return (
        <div className="flex flex-col gap-4 p-2 border-[0.5px] border-gray-400 rounded-xl min-h-64">
            <div className="flex gap-4">
                <img className="w-44 h-44 bg-gray-300 rounded-lg" src="/images/restaurant_logo.webp" />
                <div>
                    <span className="text-lg font-semibold font-main text-mainBrown">
                        Chef Morgan
                    </span>
                    <div>
                        opening hours
                    </div>
                </div>
            </div>
            <div>
                <AtomButton text={"Fazer pedido"} onclick={onMenuClick}/>
            </div>
        </div>
    )
}