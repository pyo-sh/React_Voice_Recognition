import React, { useState } from 'react'
import MainBox from 'styles/MainBox';
import RecordList from 'components/RecordList';
import RecordItem from 'components/RecordItem';

const Main: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedItem, setSelectedItem] = useState<string>('');
    
    return (
        <MainBox>
            <RecordList
                selectedItem={selectedItem}
                setSelectedItem={setSelectedItem}
                setIsOpen={setIsOpen}
                />
            <section className="Main-Record">
                {isOpen &&
                    <RecordItem
                        selectedItem={selectedItem}
                        />
                }
            </section>
        </MainBox>
    );
}


export default Main;