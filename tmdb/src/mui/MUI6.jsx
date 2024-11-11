import AddReactionIcon from '@mui/icons-material/AddReaction'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import DeleteIcon from '@mui/icons-material/Delete'
import IconButton from '@mui/material/IconButton'
function MUI6() {
   return (
      <div>
         <AddReactionOutlinedIcon />
         <AddShoppingCartIon />
         <IconButton aria-label="delete">
            <DeleteIcon />
         </IconButton>
      </div>
   )
}

export default MUI6
