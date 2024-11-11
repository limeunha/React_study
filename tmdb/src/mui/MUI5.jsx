import Button from '@mui/material/Button'
import { ThemeProvider, createtheme } from '@mui/material/style'

const theme = createtheme({
   palette: {
      primary: {
         main: '#1976d2',
      },
      secondary: {
         main: '#dc004e',
      },
   },
})

function MUI5() {
   return (
      <ThemeProvider theme={theme}>
         <Button variant="contained" color="primary">
            버튼
         </Button>
         <Button variant="contained" color="secondary">
            버튼
         </Button>
      </ThemeProvider>
   )
}
export default MUI5
