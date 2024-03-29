import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import red from '@material-ui/core/colors/red';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: red,
  },
})

export default responsiveFontSizes(theme)
