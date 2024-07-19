import React from "react"
import { Drawer, Box, List, ListItem, Input, InputAdornment, IconButton, ListItemIcon, ListItemText, Divider, ListSubheader } from "@mui/material"
import { AccountCircleOutlined, AdminPanelSettings, AdminPanelSettingsOutlined, CategoryOutlined, ConfirmationNumberOutlined, FemaleOutlined, LoginOutlined, MaleOutlined, SearchOutlined, VpnKeyOutlined, WcOutlined } from "@mui/icons-material"

export const SideMenu = () => {
  return (
    <Drawer
        open={true}
        anchor ='right'
        sx={{backdropFilter: 'blur(4px', transition: 'all 0.5 sg ease-out'}}
        >
            <Box sx={{ width:250, paddingTop:5}}>
                <List>
                    <ListItem>
                        <Input 
                        type ='text'
                        placeholder="Buscar..."
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton 
                                aria-label='toggle password visibility'>
                                <SearchOutlined/>
                                </IconButton>
                            </InputAdornment>
                        }
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <AccountCircleOutlined/>
                        </ListItemIcon>
                        <ListItemText primary={'Account'}/>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <ConfirmationNumberOutlined/>
                        </ListItemIcon>
                        <ListItemText primary={'My Orders'}/>
                    </ListItem>


                    <ListItem sx={{display:{xs:'', sm: 'none'}}}>
                        <ListItemIcon>
                            <MaleOutlined/>
                        </ListItemIcon>
                        <ListItemText primary={'Man'}/>
                    </ListItem>

                    <ListItem sx={{display:{xs:'', sm: 'none'}}}>
                        <ListItemIcon>
                            <FemaleOutlined/>
                        </ListItemIcon>
                        <ListItemText primary={'Woman'}/>
                    </ListItem>

                    <ListItem sx={{display:{xs:'', sm: 'none'}}}>
                        <ListItemIcon>
                            <WcOutlined/>
                        </ListItemIcon>
                        <ListItemText primary={'Unisex'}/>
                    </ListItem>


                    <ListItem>
                        <ListItemIcon>
                            <VpnKeyOutlined/>
                        </ListItemIcon>
                        <ListItemText primary={'Log in'}/>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                           <LoginOutlined/> 
                        </ListItemIcon>
                        <ListItemText  primary={'Log out'}/>
                    </ListItem>

                    <Divider/>
                    <ListSubheader>Admin Panel</ListSubheader>

                    <ListItem>
                        <ListItemIcon>
                            <CategoryOutlined/>
                        </ListItemIcon>
                        <ListItemText primary={'Products'}/>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <AccountCircleOutlined/>
                        </ListItemIcon>
                        <ListItemText primary={'Orders'}/>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <AdminPanelSettings/>
                        </ListItemIcon>
                        <ListItemText primary={'Users'}/>
                    </ListItem>
                </List>
            </Box>

    </Drawer>
  )
}

export default SideMenu
