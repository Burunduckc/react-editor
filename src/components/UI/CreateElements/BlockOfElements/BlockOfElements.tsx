//React
import React, {FC} from "react";
//redux
import {useAppDispatch} from "../../../../redux/store";
import {createNewElement} from "../../../../redux/sliecs/CreateElementsSlice";
//img
import iconHead from '../../../../assets/Icons.svg'
import iconImg from '../../../../assets/Icons-2.svg'
import iconPar from '../../../../assets/Icons-1.svg'
//styles
import './BlockOfElements.scss'

//IP
export interface elementsIP {
    name: string,
    src: string,
    id: number,
    type: string
}

//array
export const listOfElements = [
    {
        name: 'Headline',
        src: iconHead,
        id: 0,
        type: 'headParagraph',
        userValue: ''
    },
    {
        name: 'Paragraph',
        src: iconPar,
        id: 1,
        type: 'p',
        userValue: ''
    },
    {
        name: 'Button',
        src: iconImg,
        id: 2,
        type: 'btn',
        userValue: ''
    },
    {
        name: 'Image',
        src: iconImg,
        id: 3,
        type: 'img',
        userValue: ''
    }
]
export const BlockOfElements: FC = () => {
    const dispatch = useAppDispatch()
    const addNewElement = (item: elementsIP) => {
        dispatch(createNewElement(item))
    }


    return (
        <div className={'block-element'}>
            {
                listOfElements.map((element, index) => (
                    <div
                        key={index}
                        className={'block-element_current'}
                        onClick={() => addNewElement(element)}
                    >
                        <img src={element.src} alt={element.name} className={'block-element_img'}/>
                        <p className={'block-element_text'}>
                            {element.name}
                        </p>
                    </div>
                ))
            }
        </div>
    );
};