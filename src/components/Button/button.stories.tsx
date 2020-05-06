import React from 'react';
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Button from './button'

storiesOf('Button title', module)
.add('button',()=><Button onClick={action('clicked')}>hehe</Button>)
