
import { createContext, useState } from "react";

export const OrderCarContext = createContext([])

export const OrderCarContextProvider = ({children}) => {
    const [orderCard, setOrderCard] = useState();

    const addToCard = (item) => {
        setOrderCard(prev => prev ? [...prev, item] : [item] )
    }

    const removeFromCard = (id) => {
        const orders = orderCard.filter(order => order.id !== id)
        setOrderCard(orders)
    }
    
    return (
        <OrderCarContext.Provider value={[orderCard, addToCard, removeFromCard]}>
            {children}
        </OrderCarContext.Provider>
    )
}