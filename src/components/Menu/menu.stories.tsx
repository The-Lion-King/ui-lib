import React from 'react';
import { storiesOf } from '@storybook/react'
import Menu from './index'

storiesOf('menu title', module)
    .add('menu',()=><Menu>
        <Menu.Item>aaa</Menu.Item>
        <Menu.Item>bbb</Menu.Item>
    </Menu>)