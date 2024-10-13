import { useEffect, useState } from "react";

export default function useObserver(itemRef)
{
    const [isRestaurantNameVisible, setIsRestaurantNameVisible] = useState(false);
   
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
            setIsRestaurantNameVisible(entry.isIntersecting);
        },
        {
          root: null, // viewport
          rootMargin: '0px', // no margin
          threshold: 0.5, // 50% of target visible
        }
      );
  
      if (itemRef.current) {
        observer.observe(itemRef.current);
      }
  
      // Clean up the observer
      return () => {
        if (itemRef.current) {
          observer.unobserve(itemRef.current);
        }
      };
    }, []);

    return isRestaurantNameVisible
}