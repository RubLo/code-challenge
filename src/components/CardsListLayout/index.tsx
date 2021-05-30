import React from 'react'
import styled from 'styled-components';

export const CardsListLayout: React.FC = ({ children }) => {
    return (
        <CardLayoutWrapper>
            {children}
        </CardLayoutWrapper>
    )
}

export const CardLayoutWrapper = styled.div`
    width: 95vw;
    margin-top: 140px;
    margin-bottom: 140px;
    margin-left: auto;
    margin-right: 48px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    flex-shrink: 0;
    font-family: proxima-nova, sans-serif;
    color: #172d3d;
`;
