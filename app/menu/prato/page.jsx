'use client'
import AtomButton from "@/app/components/atoms/AtomButton";
import AtomTextBox from "@/app/components/atoms/AtomTextBox";
import SizeSelector from "@/app/components/molecules/SizeSelector";
import TopPanel from "@/app/components/molecules/TopPanel";
import { allProducts, sessions } from "@/app/const/categories";
import { OrderCarContext } from "@/app/context/OrderCar";
import { useSearchParams } from "next/navigation";
import { useContext, useMemo, useState } from "react";

export default function DishPage()
{
    const [orderCard, addToCard] = useContext(OrderCarContext);
    const [selectedSize, setSelectedSize] = useState()
    const [selectedOption, setSelectedOption] = useState(1)

    const [observations, setObservations] = useState(null)

    const searchParams = useSearchParams()
    const id = searchParams.get('id')
    
    const product = useMemo(() => (
        allProducts.find(product => product.id === Number(id))
    ), [id])

    const session = useMemo(()=>(
        sessions.find(session => session.id === product?.session)
    ), [product])

    const onSelect = (sizeId) => setSelectedSize(sizeId)

    const onSelectOption = (sizeId) => setSelectedOption(sizeId)

    const onChange = ({target}) => setObservations(target.value)

    const onAdd = () => {
        addToCard({
            id: crypto.randomUUID,
            productId: product.id,
            name: `${session.name} ${product.name} ${selectedSize?.shortName ?? ""}`,
            price: product.price ?? selectedSize.price
        })
        history.back()
    }

    const sizes = product?.sizes || session?.sizes
    return (
        <>
            <TopPanel text={""} imageLink={`/images/${session.panel}`}/>
            <div className="flex flex-col p-4">
                <div className="flex flex-col mb-2">
                    <span className="text-2xl font-semibold">{product?.name}</span>
                    <span className="text-xl text-famintoGray font-semibold" >{product?.price}</span>
                    <span className="text-sm my-2">
                        {product?.description}
                    </span>
                    <div className="my-4 flex flex-col gap-y-2">
                        {
                            product?.options 
                            && <SizeSelector title={"Opções"} sizes={product?.options} checked={selectedOption} onSelect={onSelectOption}/>
                        }
                        {
                            sizes
                            && <SizeSelector title={"Tamanho"} sizes={sizes} checked={selectedSize} onSelect={onSelect}/>
                        }
                        <AtomTextBox label={"Observações"} onChange={onChange}/>
                    </div>
                    
                </div> 
                <AtomButton text={"Adicionar ao carrinho"} onclick={onAdd}/>         
            </div>
        </>
    )
}