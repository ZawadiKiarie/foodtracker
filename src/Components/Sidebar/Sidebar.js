import React, { Component } from "react";
import Logo from "../Logo/Logo";
import Profile from "../Profile/Profile";
import Link from "../Link/Link";
import Button from "../Button/Button";
import Home from "../../assets/Home.png";
import Clock from "../../assets/Clock.png";
import User from "../../assets/User.png";
import FAQ from "../../assets/FAQ.png";
import '../Sidebar/Sidebar.css'

const Sidebar = ({ className, onClick }) => {
    return(
      <div className={className}>
        <div>
          <div onClick={onClick} className='close'>X</div>
          <Logo />
          <Profile />
          <Link img={Home} content='Dashboard' />
          <Link img={Clock} content='Meal history' />
          <Link img={User} content='Account' />
          <Link img={FAQ} content='GL FAQs' />
          <div className='signout'>
          <Button content='Sign out' />
          </div>
        </div>
      </div>
    );
}

export default Sidebar;