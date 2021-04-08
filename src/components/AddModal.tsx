import React, { useState } from 'react';
import AddModalBox, { AddModalWrapper } from 'styles/AddModalBox';

type AddModalPropType = {
    isOpen: boolean,
    setIsOpen: Function,
    addItem: Function,
};

const AddModal: React.FC<AddModalPropType> = ({ isOpen, setIsOpen, addItem }) => {
    const [title, setTitle] = useState<string>('');

    const closeModal = () => {
        setTitle('');
        setIsOpen(false);
    };

    const onChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    const addItemWithTitle = () => {
        if (title) {
            addItem(title);
            closeModal();
        }
        else {
            alert('제목을 입력해주세요!');
        }
    };

    return isOpen
        ?<>
        <AddModalBox>
            <h3 className="AddModalBox-Title">New Record!</h3>
            <button
                className="AddModalBox-Close"
                onClick={closeModal}
                ></button>
            <input
                className="AddModalBox-Name"
                onChange={onChangeTitle}
                value={title}
                />
            <button
                className="AddModalBox-Add"
                onClick={addItemWithTitle}
                >
                Add
            </button>
        </AddModalBox>
        <AddModalWrapper
            onClick={closeModal}
            />
        </>:<></>
    ;
}

export default AddModal;