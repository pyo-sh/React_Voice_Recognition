import React, { useState, useEffect } from 'react';
import RecordListBox from 'styles/RecordListBox';
import AddModal from 'components/AddModal';

type RecordListPropType = {
    selectedItem: string,
    setSelectedItem: Function,
    setIsOpen: Function,
}

const RecordList: React.FC<RecordListPropType> = ({ selectedItem, setSelectedItem, setIsOpen }) => {
    const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);
    const [list, setList] = useState<Array<any>>([]);
    const [maxId, setMaxId] = useState<number>(1);

    useEffect(() => {
        const store = window.localStorage.getItem('list');
        if (!store) {
            window.localStorage.setItem('list', JSON.stringify({ list: [], maxId: 1 }));
        }
        else {
            const storedObject = JSON.parse(store)
            setList(storedObject.list);
            setMaxId(storedObject.maxId);
        }
    }, []);

    const openItem = () => {
        if(selectedItem && list.filter((element) => element.id === Number(selectedItem[-1]))) {
            setIsOpen(true);
        }
    }

    const addItem = (title: string) => {
        const addedObject: any = {
            id: maxId,
            name: title,
        }
        setList(prev => {
            window.localStorage.setItem('list', JSON.stringify({
                list: [...prev, addedObject],
                maxId: maxId + 1,
            }));
            return [...prev, addedObject];
        });
        setMaxId(prev => prev + 1);
        addedObject.contents = [];
        addedObject.date = '';
        window.localStorage.setItem('Item_' + maxId.toString(), JSON.stringify(addedObject));
    };

    const onClickItem = (event: React.MouseEvent<HTMLElement>) => {
        const clickedId = (event.target as any).id;
        if (clickedId) {
            setSelectedItem(clickedId);
        }
    };

    return (
        <RecordListBox>
            <section className="RecordList-Buttons">
                <button
                    className="RecordList-Add"
                    onClick={() => {setIsAddModalOpen(true)}}
                    ></button>
                Record List
                <button
                    className="RecordList-Open"
                    onClick={openItem}
                    >
                    open
                </button>
                <AddModal
                    isOpen={isAddModalOpen}
                    setIsOpen={setIsAddModalOpen}
                    addItem={addItem}
                    />
            </section>
            <ul
                className="RecordItems"
                onClick={onClickItem}
                >
            {
                list.map((element, index) => {
                    const thisId = 'Item_' + element.id.toString();
                    return <li
                        className={selectedItem === thisId ? 'RecordItem-Selected' : ''}
                        id={thisId}
                        key={element.id}
                        >
                        {index}. {element.name}
                    </li>
                })
            }
            </ul>
        </RecordListBox>
    );
}

export default RecordList;