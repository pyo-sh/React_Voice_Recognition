import styled from 'styled-components';

const RecordItemBox = styled.div`
    width: 100%;
    max-width: 500px;
    min-height: 100px;
    padding: 20px 0;
    margin: 0;

    box-shadow: 0 0 6px 0 #a7c5eb;
    border-radius: 10px;

    .RecordItem-Header {
        padding: 0 15px;
        margin-bottom: 5px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .RecordItem-Title {
        margin: 0;
        font-size: 25px;
    }

    .RecordItem-Button {
        width: 70px;
        height: 40px;
        padding: 3px 5px;
        margin: 0;

        color: #f05945;
        border: 1px solid #f05945;
        border-radius: 5px;
        outline: none;
        background: none;
        cursor: pointer;

        font-size: 16px;
    }
    .Stop {
        background-color: #f05945;
        color: #ffffff;
    }

    .RecordItem-Date {
        height: 32px;
        padding: 0 15px 10px;
        display: flex;
        justify-content: flex-end;
        color: #939393;

        border-bottom: 1px solid #e4edf9;
    }
`;

export default RecordItemBox;