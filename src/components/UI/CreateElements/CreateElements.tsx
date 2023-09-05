//React
import {FC} from "react";
//UI
import {BlockOfElements} from "./BlockOfElements/BlockOfElements";
//styles
import './CreateElements.scss'


export const CreateElements: FC = () => {
    return (
        <div className={'box-of_elements'}>
            <BlockOfElements/>
        </div>
    );
};