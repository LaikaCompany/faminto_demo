
export default function FoodCard({onSelectItem})
{
    return (
        <div className="flex gap-4 w-full justify-between  p-4">
            <img src='/images/beef-burguer.jpg' alt="back" className='w-32 h-32 rounded-lg'/>
            <div>
                <span className="text-lg font-semibold font-main text-mainBrown">
                    Dish name
                </span>
                <div>
                    Alguma descrição da comida que você vai querer muito comer hehehe 
                </div>
                <div className="flex justify-between">
                    <span>R$ 50,00</span>
                    <img src='/icons/more.png' alt="add"  onClick={onSelectItem}/>
                </div>
            </div>
            
        </div>
    )
}