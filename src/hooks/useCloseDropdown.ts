import { useEffect } from "react"
import type { RefObject, Dispatch, SetStateAction } from "react"

export function useCloseDropdown(
    element: RefObject<HTMLDivElement>,
    closeFunction: Dispatch<SetStateAction<string>>,
    closeParameter: string) {
    useEffect(() => {
        const onMouseClick = (e: MouseEvent) => {
            const target = e.target as Node
            const elementDisplay = element.current ? window.getComputedStyle(element.current).display : null
            if (element.current && elementDisplay === 'block' && !element.current.contains(target)) {
                closeFunction(closeParameter)
            }
        }

        const onPressKeyESC = (e: KeyboardEvent) => {
            const elementDisplay = element.current ? window.getComputedStyle(element.current).display : null
            if (element.current && elementDisplay === 'block' && e.key === 'Escape') closeFunction(closeParameter)
        }

        const onPressKeyForScrollItem = (e: KeyboardEvent) => {
            const elementDisplay = element.current ? window.getComputedStyle(element.current).display : null
            if (element.current && elementDisplay === 'block' && e.key !== 'Escape') {
                const pressedKey = e.key.toLowerCase()
                const items = element.current?.children

                if (items) {
                    for (let item of items) {

                        const itemValue = (item as HTMLDivElement).dataset.value?.toLocaleLowerCase()
                
                        if (itemValue && itemValue.startsWith(pressedKey)) {
    
                            (item as HTMLDivElement).focus();
                            item.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                            break; 
                        }
                    }    
                }
            }
        }
    
        document.addEventListener('mousedown', onMouseClick)
        document.addEventListener('keydown', onPressKeyESC)
        document.addEventListener('keydown', onPressKeyForScrollItem)
    
        return () => {
            document.removeEventListener('mousedown', onMouseClick)
            document.removeEventListener('keydown', onPressKeyESC)
            document.removeEventListener('keydown', onPressKeyForScrollItem)

        }
    }, [])
}