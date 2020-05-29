import React from 'react';
import { CSSTransition } from 'react-transition-group'
import {CSSTransitionProps} from 'react-transition-group/CSSTransition'

type AnimationMode = 'zoom-in-top' | 'zoom-in-left' | 'zoom-in-right' | 'zoom-in-bottom';
interface TransitionProps {
    animation?: AnimationMode,
    wrapper? : boolean,
}
const Transition:React.FC<TransitionProps & CSSTransitionProps> = (props)=>{
    const {
        animation,
        classNames,
        wrapper,
        children,
        ...restProps} = props;
    return (
        <CSSTransition classNames={classNames ? classNames : animation}
                       {...restProps}>
            {wrapper?<div>{children}</div>:children}
        </CSSTransition>
    )
}

Transition.defaultProps = {
    unmountOnExit: true,
    appear: true,
}

export default Transition