'use client'
import AtomButton from "@/app/components/atoms/AtomButton";
import AtomTextBox from "@/app/components/atoms/AtomTextBox";
import SizeSelector from "@/app/components/molecules/SizeSelector";
import TopPanel from "@/app/components/molecules/TopPanel";
import { allProducts, sessions } from "@/app/const/categories";
import { OrderCarContext } from "@/app/context/OrderCar";
import { randomUUID } from "crypto";
import { useSearchParams } from "next/navigation";
import { useContext, useMemo, useState } from "react";

export default function DishPage()
{
    const [orderCard, addToCard] = useContext(OrderCarContext);
    const [selectedSize, setSelectedSize] = useState(1)
    const [observations, setObservations] = useState(null)

    const searchParams = useSearchParams()
    const id = searchParams.get('id')
    
    const product = useMemo(() => (
        allProducts.find(product => product.id === Number(id))
    ), [id])

    const session = useMemo(()=>(
        sessions.find(section => section.id === product?.section)
    ), [product])

    const onSelect = (sizeId) => setSelectedSize(sizeId)

    const onChange = ({target}) => setObservations(target.value)

    const onAdd = () => {
        addToCard({
            id: crypto.randomUUID(),
            productId: product.id,
            name: product.name,
            price: product.price
        })
        history.back()
    }

    return (
        <>
            <TopPanel text={""} imageLink={"/images/beef-burguer.jpg"}/>
            <div className="flex flex-col p-4">
                <div className="flex flex-col mb-2">
                    <span className="text-2xl font-semibold">{product?.name}</span>
                    <span className="text-xl text-famintoGray font-semibold" >{product?.price}</span>
                    <span className="text-sm my-2">
                        {product?.description}
                    </span>
                    <div className="my-4">
                        {
                            session?.sizes 
                            && <SizeSelector sizes={session.sizes} checked={selectedSize} onSelect={onSelect}/>
                        }
                        <AtomTextBox label={"Observações"} onChange={onChange}/>
                    </div>
                    
                </div> 
                <AtomButton text={"Adicionar ao carrinho"} onclick={onAdd}/>         
            </div>
        </>
    )
}