import styled from 'styled-components';

const RecordDisplayBox = styled.ul`
    width: 100%;
    min-height: 30px;
    padding: 30px 20px 0;
    margin: 0;

    list-style: none;

    .RecordDisplay-List {
        min-height: 25px;
        margin-bottom: 15px;
        display: flex;

        font-size: 18px;
    }

    .RecordDisplay-Time {
        padding-right: 5px;
        margin-right: 5px;
        font-weight: bold;

        display: flex;
        align-items: flex-start;
    }

    .RecordDisplay-Content {
        margin: 0;
        display: flex;
        flex-wrap: wrap;
    }
`;

export default RecordDisplayBox;