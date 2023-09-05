import React, {FC} from 'react';
//UI
import {Header} from "../UI/Header/Header";
import {Toolbar} from "../ToolBar/Toolbar";

const App: FC = () => {
    return (
        <div className="App">
            <Header/>
            <Toolbar/>
        </div>
    );
}

export default App;
