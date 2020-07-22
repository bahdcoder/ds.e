import React from 'react'
import ReactDOM from 'react-dom'

import { Color } from '@ds.e/react'

import '@ds.e/scss/lib/Utilities.css'

ReactDOM.render(
    <Color hexCode='#000' width='lg' height='lg' />,
    document.querySelector('#root')
)
