import { Drawer, Box, Typography, IconButton } from '@mui/material'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useState } from 'react'
import Cart from '../Cart/Cart';

const MuiDrawer = ({ checkoutLst }) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    
    return (
        <>
            <IconButton
                size='extra large'
                edge='start'
                color='inherit'
                aria-label="add to shopping cart"
                onClick={() => setIsDrawerOpen(true)}>
                <AddShoppingCartIcon />
            </IconButton>
            <Drawer
                anchor='right'
                open={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}>
                <Box p={2} width='400px' textAlign='center' role='presentation' >
                    <Typography>
                        <IconButton
                            size='extra large'
                            edge='start'
                            color='inherit'
                            aria-label="add to shopping cart"
                            onClick={() => setIsDrawerOpen(false)}>
                        <AddShoppingCartIcon />
                    </IconButton>
                    <Cart checkoutLst={checkoutLst} />
                </Typography>
            </Box>
        </Drawer>
        </>

    )
}

export default MuiDrawer