import {FC, JSX, useState} from "react";
//styles
import './ExistingElements.scss'
//Array
import {listOfElements} from "../../CreateElements/BlockOfElements/BlockOfElements";

export const ExistingElements: FC = (): JSX.Element => {
    const [currentId, setCurrentId] = useState<number>(-1)
    const [showEdit, setShowEdit] = useState<boolean>(false)
    const installId = (i: number) => {
        setShowEdit(!showEdit)
        setCurrentId(i)
    }

    return (
        <div className={'existing-block'}>
            {
                listOfElements.map((element, index) => (
                    <div
                        key={index}
                        className={`existing-block_box ${currentId === index ? 'active' : ''}` }
                        onClick={() => installId(index)}
                    >
                        <img src={element.src} alt={element.name} className={'existing-block_box__img'}/>
                        <p className={'existing-block_box__text'}>{element.name}</p>
                        {currentId === index && showEdit && <input/>}
                    </div>
                ))
            }
        </div>
    );
};