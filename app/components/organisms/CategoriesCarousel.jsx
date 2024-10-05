'use client'
import { useState } from 'react'
import CategoryCard from '../molecules/CategoryCard'
import {CATEGORIES} from '../../const/categories'

export default function CategoriesCarousel({onSelectCalegory})
{

    const [selectedCategory, setSelectedCategory] = useState(null)

    const onCategoryClick = (category) => {
        const alreadySelected = selectedCategory?.id === category.id
        const updatedCategory = alreadySelected ? null : category
        setSelectedCategory(updatedCategory)
        // onSelectCalegory(updatedCategory)
    }

    return (
        <div className="flex my-6 overflow-auto gap-x-3" style={{scrollbarWidth: "none"}}>
            {
                CATEGORIES.map(category => {
                    return(
                        <div key={category.id} onClick={() => onCategoryClick(category)}>
                            <CategoryCard 
                                id={category.id}
                                title={category.title}
                                selected={category.id === selectedCategory?.id}
                            />
                        </div>
                    )
                })
        }   
        </div>
    )
}