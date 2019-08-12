import { configure, addDecorator } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

const req = require.context('../stories', true, /\.story\.js$/)

addDecorator(withInfo)

configure(() => {
  req.keys().forEach(filename => req(filename))
}, module)
