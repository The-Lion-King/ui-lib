import { addDecorator, addParameters, configure} from '@storybook/react'
import React from 'react'
import '../src/components/styles/index.scss'

const wrapperStyle: React.CSSProperties = {
    padding: '20px 40px'
}

const container = (stroyFn:any) => (<div style={wrapperStyle}>
    {stroyFn()}
</div>)


addDecorator(container);
addParameters({info: { inline: true, header: false}})

const loadFn = () => {
    const exportArr = [require('../src/stories/0-Welcome.stories')]
    const req = require.context('../src/components',true,/\.stories\.tsx$/)
    req.keys().forEach(fname => exportArr.push(req(fname)));
    return exportArr;
};
configure(loadFn,module);