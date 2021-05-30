import React from 'react'
import styled from 'styled-components';

type SelectionToggleProps = {
    action: Function;
    actionLabel: string;
    descriptionTitle: string;
}

export const SelectionHeader: React.FC<SelectionToggleProps> = ({ action, descriptionTitle, actionLabel }) => {
    return (
        <HeaderWrapper>
            <h2>{descriptionTitle}</h2>
            <ActionWrapper onClick={action}>
                <h3>{actionLabel}</h3>
            </ActionWrapper>
        </HeaderWrapper>
    )
}

const HeaderWrapper = styled.div`
    width: 100%;
    position: fixed;
    top: 0;
    height: 90px;
    z-index: 1000;
    background: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,.21);
    h3 {
        margin-right: 48px;
    }
    h2 {
        margin-left: 48px;
    }
`;

const ActionWrapper = styled.div`
    cursor: pointer; 
`;