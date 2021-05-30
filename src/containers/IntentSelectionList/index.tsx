import React from 'react'
import { IntentCard } from '../../components/IntentCard'
import intents from '../../api/intents.json';
import { useSelectionList } from './useIntentSelectionList';
import { CardsListLayout } from '../../components/CardsListLayout';
import { SelectionHeader } from '../../components/SelectionHeader';

/**
 *  This container renders a list of cards from given intents list
 *  it also renders an header with a description and action
 */
export const IntentSelectionList = () => {
    const { selectedIds, onSelectionHandler, toggleAll, needsDeselection } = useSelectionList(intents.map(intent => intent.id));
    return (
        <>
            <SelectionHeader descriptionTitle={"Please select one of more pretrained intents from these templates"} actionLabel={needsDeselection ? 'Deselect All' : 'Select All'} action={toggleAll} />
            <CardsListLayout>
                {
                    intents.map(({ name, description, id, trainingData: { expressions }, reply }) =>
                        <IntentCard
                            key={id}
                            name={name}
                            description={description}
                            expression={expressions[0].text}
                            reply={reply.text}
                            onCardClick={() => onSelectionHandler(id)}
                            isSelected={selectedIds.includes(id)}
                        />
                    )
                }
            </CardsListLayout>
        </>
    )
}
