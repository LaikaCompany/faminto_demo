'use client'
import AtomButton from "@/app/components/atoms/AtomButton";
import AtomTextBox from "@/app/components/atoms/AtomTextBox";
import SizeSelector from "@/app/components/molecules/SizeSelector";
import TopPanel from "@/app/components/molecules/TopPanel";

export default function DishPage()
{
    return (
        <>
            <TopPanel text={""} imageLink={"/images/beef-burguer.jpg"}/>
            <div className="flex flex-col p-4">
                <div className="flex flex-col mb-2">
                    <span className="text-2xl font-semibold">Nome do prato</span>
                    <span className="text-xl text-famintoGray font-semibold" >R$ 50,00</span>
                    <span className="text-sm my-2">
                        Hambúrguer, bacon, queijo cheddar, ovo estrelado, alface, cebola crocante e molho revoltado.
                    </span>
                    <div className="my-4">
                        <SizeSelector/>
                        <AtomTextBox label={"Observações"}/>
                    </div>
                    
                </div> 
                <AtomButton text={"Adicionar ao carrinho"} onclick={()=>{}}/>         
            </div>
        </>
    )
}