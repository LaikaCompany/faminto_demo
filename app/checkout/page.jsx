'use client'
import AtomButton from "../components/atoms/AtomButton";
import SizeSelector from "../components/molecules/SizeSelector";
import TopBar from "../components/molecules/TopBar";
import { useContext, useMemo, useState } from "react";
import { OrderCarContext } from "../context/OrderCar";

export default function checkout()
{
    const [selectedSize, setSelectedSize] = useState()
    const [orderCard, addToCard] = useContext(OrderCarContext);
    const [addressInfo, setAddressInfo] = useState({})
    const onSelect = (sizeId) => {
        setSelectedSize(sizeId)
    }
  
    const sizes = [
        {
            id: 1, 
            name: "Dinheiro",
            price: ""
        },
        {
            id: 2, 
            name: "Cartão", 
            price: ""
        },
        {
            id: 3, 
            name: "PIX", 
            price: ""
        }
    ]

    const filteredOrderCard = useMemo(() => {
        let newOrder = [];
        orderCard?.forEach(item => {
            const existingOrder = newOrder.find(order => order.productId === item.productId);
            if (existingOrder && (existingOrder.price === item.price)) {
                newOrder = newOrder.map(order => {
                    if (order.productId === item.productId) {
                        return {
                            ...order,
                            quantity: order.quantity + 1
                        };
                    }
                    return order;
                });
            } else {
                newOrder.push({ ...item, quantity: 1 });
            }
        });
        return newOrder;
    }, [orderCard]);

    const total = useMemo(()=>{
        let sum = 0;
        filteredOrderCard.forEach(order => {
            const price = parseFloat(order.price.split("R$")[1]) * order.quantity
            sum += price
        })
        return sum
    }, [filteredOrderCard])

    const updateAddressInfo = (value, field) => {
        setAddressInfo({...addressInfo, [field]: value})
    }

    const makeOrder = () => {
        const messageInfo = {
            order: filteredOrderCard,
            addressInfo, 
            totalPrice: total,
            paymentMethod: selectedSize.name
        }
        const phoneNumber = "31642836213"; // Phone number with country code
        window.open(formatOrderMessage(messageInfo, phoneNumber), '_blank');
    }

    function formatOrderMessage(test, phoneNumber) {
        // Destructure the object for easy access
        const { addressInfo, order, paymentMethod, totalPrice } = test;
        const { name, street, zone } = addressInfo;
        
        // Start building the message string
        let message = `FAMITO - ${name}\nPedido:\n`;
    
        // Format each item in the order
        order.forEach((item, index) => {
            message += `*${item.name}* (x${item.quantity}) - R$${item.price}\n`;
        });
    
        // Add address, price, and payment information
        message += `\nEndereço:\n${street} - ${zone}\n\n`;
        message += `Preço: ${totalPrice}\nMétodo de Pagamento: ${paymentMethod}`;
    
        // Encode message to URI format for WhatsApp
        const encodedMessage = encodeURIComponent(message);
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
        // Return or log the WhatsApp URL
        return whatsappURL;
    }

    const test = "p-2 rounded bg-darkWhite"
    return (
        <div>
            <TopBar/>
            <div className="m-2">
                <img src="/icons/back.png" alt="back" onClick={()=>history.back()}/>
            </div>
            
            <div className="mx-4 flex flex-col gap-y-4 mt-6">
                <form className="flex flex-col gap-y-2">
                    <div>
                        <span className=' py-2 text-xl font-semibold font-main'>
                            Informações de entrega
                        </span>
                        <div className="flex flex-col gap-y-1">
                            <label htmlFor="name">Nome</label>
                            <input 
                                type="text"
                                name="name"
                                className={test}
                                id="name"
                                onChange={({target}) => updateAddressInfo(target.value, "name")}
                                required
                            />

                            <label htmlFor="zone">Bairro</label>
                            <input
                                type="text"
                                name="zone"
                                className={test}
                                id="zone"
                                required
                                onChange={({target}) => updateAddressInfo(target.value, "zone")}
                            />
                            
                            <label htmlFor="street">Rua e número</label>
                            <input
                                type="text"
                                name="street"
                                className={test}
                                id="street"
                                required
                                onChange={({target}) => updateAddressInfo(target.value, "street")}
                            />                    
                        </div>
                    </div>                
                </form>
                <div>
                    <span className='py-2 text-xl font-semibold font-main'>
                        Pedido
                    </span>
                    <div>
                        {
                            filteredOrderCard?.map(item => {
                                return (
                                    <div className="flex justify-between py-2" key={item.id}>
                                        <div className="flex gap-x-2">
                                            <span className="text-sm font-medium">{item.name}</span>
                                            <span className="text-sm text-[#4B4B4B]">{item.quantity ? `x${item.quantity }` : ""}</span>
                                        </div>
                                        <span>{item.price}</span>
                                    </div>
                                )
                            })
                        }
                        <div className="flex justify-between py-2">
                            <span className="text-md font-semibold">Total</span>
                            <span className="text-md font-semibold">R$ {total}</span>
                        </div>
                    </div>
                </div>
                <SizeSelector title="Forma de pagamento" sizes={sizes}  checked={selectedSize} onSelect={onSelect}/>
                <AtomButton text="Finalizar pedido" onclick={makeOrder}/>
            </div>

        </div>
    )
}