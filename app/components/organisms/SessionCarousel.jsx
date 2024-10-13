
'use client'
import { useState } from 'react'

export default function SessionCarousel()
{
    const [selectedCategory, setSelectedCategory] = useState(null)

    const onCategoryClick = (session) => {
        const alreadySelected = selectedCategory === session
        const updatedCategory = alreadySelected ? null : session
        setSelectedCategory(updatedCategory)
    }

    const sessions = ["Burguer","Pizza", "Refrigerante", "Beer", "Sobremesa", "Refeição", "test","test2", ]
    const selectedClasses = "bg-lightYellow"

    return (
        <div className="flex mb-6 h-8 items-center overflow-auto gap-x-3 sticky top-12 bg-white border-[0.5px] border-gray-400" style={{scrollbarWidth: "none"}}>
            {
                sessions.map(session => {
                    return(
                        <div key={session} onClick={() => onCategoryClick(session)} className={`${selectedCategory === session && selectedClasses} h-full`}>
                            <div className={`h-full px-2 flex flex-col justify-center items-center`}>
                                <span className='w-full text-center truncate'>{session}</span>
                            </div>
                        </div>
                    )
                })
            }   
        </div>
    )
}