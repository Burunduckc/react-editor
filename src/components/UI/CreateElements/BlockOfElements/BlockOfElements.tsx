//React
import React, {FC} from "react";
//img
import iconHead from '../../../../assets/Icons.svg'
import iconImg from '../../../../assets/Icons-2.svg'
import iconPar from '../../../../assets/Icons-1.svg'
//styles
import './BlockOfElements.scss'
//array
export const listOfElements = [
    {
        name: 'Headline',
        src: iconHead,
        id: 0
    },
    {
        name: 'Paragraph',
        src: iconPar,
        id: 1
    },
    {
        name: 'Button',
        src: iconImg,
        id: 2
    },
    {
        name: 'Image',
        src: iconImg,
        id: 3
    }
]
export const BlockOfElements: FC = () => {
    return (
        <div className={'block-element'}>
            {
                listOfElements.map((element, index) => (
                    <div
                        key={index}
                        className={'block-element_current'}
                    >
                        <img src={element.src} alt={element.name} className={'block-element_img'}>

                        </img>
                        <p className={'block-element_text'}>
                            {element.name}
                        </p>
                    </div>
                ))
            }
        </div>
    );
};