import styled from "styled-components";

export const ScApp = styled.div`
    display: flex;
    padding: 2rem;

    .left {
        flex: 2;
        min-width: 200px;
    }
    .line {
        height: 600px;
        width: 2px;
        background-color: gray;
        margin: 0 1rem;
    }

    .right {
        flex: 10;
    }
`;
