import styled from 'styled-components';

const AddModalBox = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;

    width: 360px;
    height: 150px;
    padding: 40px 20px 20px 20px;

    box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
    background-color: #ffffff;
    border-radius: 10px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    .AddModalBox-Title {
        margin: 0;
        position: absolute;
        top: 15px;
        left: 20px;
    }

    .AddModalBox-Name {
        width: 100%;
        height: 25px;
        padding: 0 5px;
        margin: 0;

        border: none;
        outline: none;
        border-bottom: 1px solid #4a47a3;
    }

    .AddModalBox-Add {
        width: 45px;
        height: 25px;
        padding: 3px 5px;
        margin: 0 0 0 10px;

        color: #4a47a3;
        border: 1px solid #4a47a3;
        border-radius: 5px;
        outline: none;
        background: none;
        cursor: pointer;
    }

    .AddModalBox-Close {
        width: 20px;
        height: 20px;
        padding: 0;
        margin: 7.5px 7.5px 0 0;

        position: absolute;
        top: 0;
        right: 0;

        outline: none;
        border: none;
        background: none;
        cursor: pointer;

        // X 버튼
        :before, :after {
            margin-top: -7.5px;

            content: ' ';
            width: 2px;
            height: 15px;
            position: absolute;
            background-color: #333333;
        }
        :before {
            transform: rotate(45deg);
        }
        :after {
            transform: rotate(-45deg);
        }
    }
`;

export const AddModalWrapper = styled.div`
    width: 105vw;
    height: 105vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    background-color: gray;
    opacity: 0.3;
`;

export default AddModalBox;