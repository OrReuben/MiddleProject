import {createTheme} from "@mui/material"
import {red} from '@mui/material/colors'

export const theme = createTheme({
    palette:{
        primary:{
            main:red[200],
        },
        secondary:{
            main:red[50]
        },
        otherColor:{
            main:red[300]
        }
    }
})