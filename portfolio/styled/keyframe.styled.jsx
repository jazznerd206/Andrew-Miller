import styled , { keyframes } from 'styled-components';

export const flash = keyframes`
    0% {
        transform: translateX(-100%);
    }

    100% {
        transform: translateX(0%);
    }
`;