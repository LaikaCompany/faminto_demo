'use client'
import TopPanel from '../components/molecules/TopPanel'
import SessionCarousel from '../components/organisms/SessionCarousel'
import MenuSession from "../components/organisms/MenuSession"
import { useRouter } from 'next/navigation'

export default function Menu()
{
    const router = useRouter();

    const sessions = [
        {
            name: "Session 1",
            items: ["Item 1", "Item 2", "Item 3"]
        },
        {
            name: "Session 2",
            items: ["Item 1", "Item 2", "Item 3"]
        }
    ]
    return (
        <>
        <TopPanel text={"Nome do restaurante"} imageLink={"/images/wallpaper.jpg"}/>
        <SessionCarousel />
        {
            sessions.map(session => {
                return <MenuSession key={session.name} session={session} onSelectItem={()=>router.push("menu/prato")}/>
            })
        }
        </>
    )
}