import React, {useState} from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink, SidebarWrapper} from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    const [english, setEnglish] = useState(true)
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>

        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink>
                    {english ? 'Mandi' : 'منڈی'}
                </SidebarLink>
                <SidebarLink to='home' onClick={toggle}>
                منڈی
                </SidebarLink>
                <SidebarLink to='about' onClick={toggle}>
                کیا ہے منڈی
                </SidebarLink>
                <SidebarLink to='buy' onClick={toggle}>
                خریدیں
                </SidebarLink>
                <SidebarLink to='sell' onClick={toggle}>
                فروخت
                </SidebarLink>
            </SidebarMenu>
        </SidebarWrapper>
            
        </SidebarContainer>
    )
}

export default Sidebar;
