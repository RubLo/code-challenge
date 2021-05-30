import { useState } from "react";

/**
 * 
 * @param ids 
 * 
 * Hook to be used for multi selection / deselection of elements, given an id list
 *  
 */
export const useSelectionList = (ids: string[]) => {
    const [selectedIds, setSelected] = useState<string[]>([]);

    // function that handles selection
    const onSelectionHandler = (id: string) => {
        // if an id it is already part of selectedIds, is removed
        if (selectedIds.includes(id)) {
            const newSelection = selectedIds.filter(selected => selected !== id);
            setSelected(newSelection)
        } 
        // otherwise is added to the array
        else {
            setSelected([...selectedIds, id])
        }
    }

    // select or deselect all elements
    const toggleAll = () => {
        const needsDeselection = selectedIds.length === ids.length;
        setSelected(needsDeselection ? [] : ids)
    }

    return {
        selectedIds, onSelectionHandler, toggleAll, needsDeselection: selectedIds.length === ids.length
    }
}