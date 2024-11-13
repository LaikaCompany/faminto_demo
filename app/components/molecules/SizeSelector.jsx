export default function SizeSelector({title, sizes, checked, onSelect})
{
    return (
        <div>
            <span className="text-xl font-semibold">{title}</span>
            <div className="divide-y" >
                {
                    sizes.map(size => {
                        return <div className="flex justify-between py-4" key={size.id}>
                            <div className="flex gap-x-2">
                                <span className="text-sm font-medium">{size.name}</span>
                                <span className="text-sm text-[#4B4B4B]">{size.price}</span>
                            </div>
                            <input
                                type="checkbox"
                                className="h-5 w-5 accent-mainBrown"
                                onChange={() => onSelect(size)}
                                checked={checked?.id === size?.id}
                            />
                        </div>
                    })
                }
            </div>

        </div>
    )
}