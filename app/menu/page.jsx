'use client'
import TopPanel from '../components/molecules/TopPanel'
import SessionCarousel from '../components/organisms/SessionCarousel'
import MenuSession from "../components/organisms/MenuSession"
import { sessions } from '../const/categories'
import { useContext } from 'react'
import { useRouter } from "next/navigation";
import { OrderCarContext } from '../context/OrderCar'
import AtomButton from '../components/atoms/AtomButton'

export default function Menu()
{
    const [orderCard, addItem]= useContext(OrderCarContext);
    const router = useRouter()
  
    return (
        <div className='flex flex-col'>
            <TopPanel text={"Chef Morgan"} imageLink={"/images/restaurant_pane.jpg"}/>
            <SessionCarousel />
            {sessions.map(session => {
                return <MenuSession key={session.id} session={session}/>
            })}
            {
            orderCard?.length &&
                <div className='flex items-center justify-center bg-mainOrange h-12 w-1/2 rounded bottom-4 self-center fixed'>
                   <AtomButton text="Ir para o carrinho" onclick={()=>router.push(`checkout`)} icon={"/icons/shopping-cart.png"}/>
                </div>
            }
        </div>

    )
}