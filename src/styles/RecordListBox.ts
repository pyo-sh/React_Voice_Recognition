import styled from 'styled-components';

const RecordListBox = styled.div`
    width: 300px;
    min-height: 100px;
    padding: 10px 0;
    margin: 0 30px;

    box-shadow: 0 0 6px 0 #a7c5eb;
    border-radius: 10px;

    .RecordList-Buttons {
        padding: 0 10px 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        font-weight: bold;
        font-size: 18px;

        border-bottom: 1px solid #e4edf9;
    }

    .RecordList-Add {
        width: 35px;
        height: 35px;
        padding: 0;
        margin: 0 0 0 0;

        outline: none;
        border: 1px solid #4a47a3;
        border-radius: 50%;
        background: none;
        cursor: pointer;
        // + 버튼
        :before, :after {
            margin-top: -7.6px;
            margin-left: -1px;

            content: ' ';
            width: 1px;
            height: 16px;
            position: absolute;
            background-color: #4a47a3;
        }
        :after {
            transform: rotate(90deg);
        }
    }

    .RecordList-Open {
        width: 55px;
        height: 30px;
        padding: 3px 5px;
        margin: 0;

        color: #4a47a3;
        border: 1px solid #4a47a3;
        border-radius: 5px;
        outline: none;
        background: none;
        cursor: pointer;

        font-size: 16px;
    }

    .RecordItems {
        padding: 25px 20px 0;
        margin: 0;
        list-style: none;
        font-size: 16px;

        li {
            padding-left: 5px;
            margin-bottom: 10px;
        }
    }

    .RecordItem-Selected {
        font-weight: bold;
    }
`;

export default RecordListBox;