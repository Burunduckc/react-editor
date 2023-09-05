//React
import {FC} from "react";
//UI
import {ExistingElements} from "./ExistingElements/ExistingElements";
//styles
import './CurrentElements.scss'
export const CurrentElements: FC = () => {
    return (
        <div className={'current_block'}>
            <ExistingElements/>
        </div>
    );
};