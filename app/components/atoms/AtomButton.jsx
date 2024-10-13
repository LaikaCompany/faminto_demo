
export default function AtomButton({text, onclick})
{
    return (
    <button 
        className="w-full h-11 bg-mainOrange rounded-lg text-white text-lg font-semibold"
         onClick={onclick}
    >
        {text}
    </button>
    )
}