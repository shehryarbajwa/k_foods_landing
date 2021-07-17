import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={(e) => console.log(e)}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink
            to='/'
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
          >
            منڈی
          </SidebarLink>
          <SidebarLink
            to='/about'
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
          >
            کیا ہے منڈی
          </SidebarLink>
          <SidebarLink
            to='/buy'
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
          >
            خریدیں
          </SidebarLink>
          <SidebarLink
            to='/sell'
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
          >
            فروخت
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to='/sell'>منڈی پر فروخت</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
