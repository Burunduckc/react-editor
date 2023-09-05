//React
import {FC} from "react";
//UI
import {CreateElements} from "../UI/CreateElements/CreateElements";
import {CurrentElements} from "../UI/CurrentElements/CurrentElements";
//Styles
import './ToolBar.scss'

export const Toolbar: FC = () => {
    return (
        <div className={'toolbar-box'}>
            <CreateElements/>
            <CurrentElements/>
        </div>
    );
};