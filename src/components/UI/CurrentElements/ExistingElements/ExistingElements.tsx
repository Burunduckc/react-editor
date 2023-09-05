import React, {FC, JSX, useState, ChangeEvent} from "react";
//styles
import './ExistingElements.scss'
//redux
import {useAppDispatch, useAppSelector} from "../../../../redux/store";
import {changeValueElement, removeElement} from "../../../../redux/sliecs/CreateElementsSlice";

export const ExistingElements: FC = (): JSX.Element => {
    const {arrayForRender} = useAppSelector(state => state.createElement)
    const [currentId, setCurrentId] = useState<number>(-1)
    const [showEdit, setShowEdit] = useState<boolean>(false)
    const dispatch = useAppDispatch()
    const installId = (i: number) => {
        if (arrayForRender.length === 0) {
            setCurrentId(-1)
        } else {
            setCurrentId(i)
        }
        setShowEdit(!showEdit)
    }

    const deleteElement = (index: number) => dispatch(removeElement(index))

    const changeValueHandler = (event: ChangeEvent<HTMLInputElement>, i: number) => {
        const target = event.target.value
        dispatch(changeValueElement({target, i}))
    }

    return (
        <div className={'existing-block'}>
            {
                arrayForRender.map((element, index) => (
                    <div
                        key={index}
                        className={`existing-block_box ${currentId === index ? 'active' : ''}`}
                        onClick={() => installId(index)}
                    >
                        <img src={element.src} alt={element.name} className={'existing-block_box__img'}/>
                        <p className={'existing-block_box__text'}>{element.name}</p>
                        {currentId === index && <input onChange={
                            (event) => changeValueHandler(event, index)}
                                                       value={element.userValue}/>}
                        <div onClick={() => deleteElement(index)}>удалитьь</div>
                    </div>
                ))
            }
        </div>
    );
};