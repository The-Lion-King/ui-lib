import React from 'react'
import {render, fireEvent, RenderResult} from '@testing-library/react'
import Button, { ButtonProps } from './button'

const defaultProps = {
    onClick: jest.fn()
};
const testProps: ButtonProps = {
    btnType: 'primary',
    size: 'lg',
    className: 'klass'
};

const disabledProps = {
    onClick: jest.fn(),
    disabled: true
}

let wrapper:RenderResult,element:HTMLButtonElement;

describe('button component test', () => {
    beforeEach(()=>{
        wrapper = render(<Button {...defaultProps} >test</Button>);
        element = wrapper.getByText('test') as HTMLButtonElement
    });
    it('should render the correct default button ',  () => {

        expect(element).toBeInTheDocument();
        expect(element.tagName).toEqual('BUTTON');
        expect(element).toHaveClass('btn btn-default');
        expect(element.disabled).toBeFalsy();
        fireEvent.click(element);
        expect(defaultProps.onClick).toHaveBeenCalled();
    });
    it('should render the correct component based on different props', () => {
        const wrapper = render(<Button {...testProps} >haha</Button>);
        const element = wrapper.getByText('haha') as HTMLButtonElement;
        expect(element.tagName).toEqual('BUTTON');
        expect(element).toBeInTheDocument();
        expect(element).toHaveClass('btn btn-primary btn-lg klass');
        expect(element.disabled).toBeFalsy();
    });
    it('should render a link when btnType equals link and href is provided', () => {
        const wrapper = render(<Button btnType="link" href="http://www.baidu.com/" >a标签</Button>);
        const element = wrapper.getByText('a标签') as HTMLAnchorElement;
        expect(element.tagName).toEqual('A');
        expect(element).toBeInTheDocument();
        expect(element.href).toEqual("http://www.baidu.com/");
        expect(element).toHaveClass('btn btn-link');

    });
    it('should render disabled button when disabled set to true', () => {
        const wrapper = render(<Button {...disabledProps} >disabled</Button>);
        const element = wrapper.getByText('disabled') as HTMLButtonElement;
        expect(element).toBeInTheDocument();
        fireEvent.click(element);
        expect(disabledProps.onClick).not.toHaveBeenCalled();
    })
});

