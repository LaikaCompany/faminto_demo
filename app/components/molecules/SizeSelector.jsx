export default function SizeSelector()
{
    const test = [1, 2, 3, 4]
    return (
        <div>
            <span className="text-xl font-semibold">Tamanho</span>
            <div className="divide-y" >
                {
                    test.map(size => (
                        <div className="flex justify-between py-4">
                            <div className="flex gap-x-2">
                                <span className="text-sm font-medium">Pequeno</span>
                                <span className="text-sm text-[#4B4B4B]">R$ 40,00</span>
                            </div>
                            <input type="checkbox" className="h-5 w-5 accent-mainBrown"/>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}