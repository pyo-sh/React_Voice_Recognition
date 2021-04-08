import styled from 'styled-components';

const MainBox = styled.div`
    width: 100%;
    min-height: 100vh;
    padding: 100px 0;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    
    @media (max-width: 861px) {
        flex-direction: column;
    }

    .Main-Record {
        min-width: 500px;
    }
`;

export default MainBox;