import React from 'react'
import styled from 'styled-components';

type IntentCardProps = {
    name: string;
    description: string;
    expression: string;
    reply: string;
    isSelected?: boolean;
    onCardClick?: Function
}

export const IntentCard: React.FC<IntentCardProps> = ({ name, description, expression, reply, isSelected, onCardClick }) => {
    return (
        <Card isSelected={isSelected} onClick={onCardClick}>
            <CardName>{name}</CardName>
            <CardDescription>{description}</CardDescription>
            <BubbleWrapper>
                <ExpressionBubble>{expression}</ExpressionBubble>
                <ReplyBubble>{reply}</ReplyBubble>
            </BubbleWrapper>
        </Card>
    )
}

const cardHeight = 250;
const cardWidth = 250;
const Card = styled.div`
    width: 25%;
    min-width: ${cardWidth}px;
    height: ${cardHeight}px;
    border-radius: 8px;
    padding-top: 12px;
    margin: 24px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,.2);
    cursor: pointer;
    border: solid 2px ${({ isSelected }) => isSelected ? '#5fe07b' : 'transparent'};
    &:hover {
        transform: scale(1.02);
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,.21);
    }
    

    transition: all 0.2s ease-in-out;
    overflow: hidden;
`;

const ExpressionBubble = styled.div`
    width: fit-content;
    margin-left: auto;
    margin-bottom: 18px;
    padding: 8px 12px;
    border-radius: 6px;
    background: rgba(23, 45, 61);
    color: white;
`;

const ReplyBubble = styled.div`
    width: fit-content;
    margin-right: auto;
    padding: 8px 12px;
    border-radius: 6px;
    background: white;
`;

const BubbleWrapper = styled.div`
    width: 80%;
    margin: auto;
    background: rgb(238, 242, 245);
    height: 250px;
    padding-top: 36px;
    padding-left: 12px;
    padding-right: 12px;
    border-radius: 18px;
    box-shadow: 0px 4px 8px 0px #6b565633;

`;

const CardName = styled.h2`
    margin: 0;
    margin-bottom: 8px;
    margin-left: 18px;
    margin-right: 12px;
`;

const CardDescription = styled.p`
    margin: 0;
    margin-bottom: 12px;
    margin-left: 18px;
    margin-right: 12px;
`;