import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink, SidebarWrapper} from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>

        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to='home' onClick={toggle}>
                    Home
                </SidebarLink>
                <SidebarLink to='about' onClick={toggle}>
                    About
                </SidebarLink>
                <SidebarLink to='buy' onClick={toggle}>
                    Buy
                </SidebarLink>
                <SidebarLink to='sell' onClick={toggle}>
                    Sell
                </SidebarLink>
            </SidebarMenu>
        </SidebarWrapper>
            
        </SidebarContainer>
    )
}

export default Sidebar;
