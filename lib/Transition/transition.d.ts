import React from 'react';
import { CSSTransitionProps } from 'react-transition-group/CSSTransition';
declare type AnimationMode = 'zoom-in-top' | 'zoom-in-left' | 'zoom-in-right' | 'zoom-in-bottom';
interface TransitionProps {
    animation?: AnimationMode;
    wrapper?: boolean;
}
declare const Transition: React.FC<TransitionProps & CSSTransitionProps>;
export default Transition;
