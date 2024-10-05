export default function CategoryCard({id, title, selected})
{
    const selectedClasses = "bg-lightYellow rotate-12 rounded-full"
    return (
        <div className="max-w-24 min-w-20 flex flex-col justify-center items-center">
            <div className={`${selected && selectedClasses} w-16 h-16 flex items-center justify-center p-1`}>
                <img src={`icons/${id}.png`} className={"h-11"} alt={id}/>
            </div>
            <span className='w-full text-center truncate'>{title}</span>
        </div>
    )
}