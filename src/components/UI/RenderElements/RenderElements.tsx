//Redux
import {useAppSelector} from "../../../redux/store";
//styles
import './RendredElements.scss'

export const RenderElements = () => {
        const {arrayForRender} = useAppSelector(state => state.createElement)
        return (
            <div className={'blocks_for'}>
                {
                    arrayForRender.map((element, id) => {
                        if (element.type === 'p') {
                            return <p className={'blocks_for__text'}>
                                {element.userValue}
                            </p>
                        } else if (element.type === 'img') {
                            return <img
                                src={element.userValue}
                                alt={element.name}
                                className={'blocks_for__img'}
                            />
                        } else if (element.type === 'headParagraph') {
                            return <h1
                                className={'blocks_for__headline'}
                            >
                                {element.userValue}
                            </h1>
                        } else if (element.type === 'btn') {
                            return <button
                                className={'blocks_for__button'}
                            >
                                {element.userValue}
                            </button>
                        }
                        return true
                    })}
            </div>
        );
    }
;