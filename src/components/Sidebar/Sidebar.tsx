import React from "react";
import { Button, Logo } from "ui";
import logo from "assets/imgs/icons/logo.svg";
import menu from "assets/imgs/icons/menuicon.svg";
import settings from "assets/imgs/icons/settings.svg";
import user from "assets/imgs/svg/user.svg";
import "./Sidebar.scss";

const Sidebar: React.FC = () => {
	return (
		<section className="sidebar flex flex-col justify-between h-svh items-center">
			<div className="flex flex-col items-center">
				<Logo
					className="sidebar__logo w-[56px] h-[56px] p-[12px] mb-2"
					src={logo}
					alt="logo"
				/>
				<Button children={<img src={menu} alt={"sidebar menu"} />} className="" />
			</div>
			<div className="flex flex-col items-center">
				<Button children={<img src={settings} alt={"sidebar settings"} />} className="" />
				<Button
					className="sidebar__user w-[56px] h-[56px] p-[12px] mt-2"
					link="/"
					children={<img src={user} alt={"sidebar user"} />}
				/>
			</div>
		</section>
	);
};

export default Sidebar;
