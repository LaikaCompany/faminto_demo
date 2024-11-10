export default function SizeSelector({sizes, checked, onSelect})
{
    return (
        <div>
            <span className="text-xl font-semibold">Tamanho</span>
            <div className="divide-y" >
                {
                    sizes.map(size => (
                        <div className="flex justify-between py-4" key={size.id}>
                            <div className="flex gap-x-2">
                                <span className="text-sm font-medium">{size.name}</span>
                                <span className="text-sm text-[#4B4B4B]">{size.price}</span>
                            </div>
                            <input
                                type="checkbox"
                                className="h-5 w-5 accent-mainBrown"
                                onChange={() => onSelect(size.id)}
                                checked={checked === size.id}
                            />
                        </div>
                    ))
                }
            </div>

        </div>
    )
}