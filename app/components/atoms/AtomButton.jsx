
export default function AtomButton({text, onclick, icon})
{
    return (
    <button 
        className="flex items-center justify-around w-full h-11 bg-mainOrange rounded-lg text-white text-lg font-semibold"
         onClick={onclick}
    >
        {
            icon && <img src="/icons/shopping-cart.png"  className="w-6 h-6" alt="carrinho" />
        }
        {text}
    </button>
    )
}