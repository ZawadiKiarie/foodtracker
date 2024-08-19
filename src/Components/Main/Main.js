import React, { useState } from 'react';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import Sidebar from '../Sidebar/Sidebar';

const Main =  () => {
  const [sidebarOpen, setSidebarOpen ] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  }

  return (
    <div>
      <HamburgerMenu onClick={toggleSidebar} />
      <Sidebar onClick={toggleSidebar} className={sidebarOpen ? 'sidebar open': 'sidebar'} />
    </div>
  )
}

export default Main;