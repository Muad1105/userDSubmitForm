import { FunctionComponent, useState } from 'react';
import { useSelector } from 'react-redux';



export const ActionButton = (props) => {
    const [isLoading, setIsLoading] = useState(false);
    const actions = useSelector((store) => store.actionBtn);

    const onButtonClick = (event) => {
        event.preventDefault();
        if(props.onClick && !isLoading) {
            setIsLoading(true);
            props.onClick();
        }
    };

    if(isLoading !== actions.actionTriggered) {
        setIsLoading(actions.actionTriggered);
    }

    return(
        <button className={props.className ? props.className : "common_button"} disabled={isLoading} onClick={onButtonClick} >
            Loading...
        </button>
    );
};