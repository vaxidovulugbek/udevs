import React from "react";
import { Input } from "ui/Input/Input";
import search from "assets/imgs/icons/search.svg";
import shoplist from "assets/imgs/icons/shopping-list.svg";
import chevronDown from "assets/imgs/icons/Chevron down.svg";
import time from "assets/imgs/icons/time.svg";

function Topbar() {
	return (
		<div className="topbar flex justify-between items-center">
			<Input
				className="outline-none ps-2"
				innerClass="p-2 topbar__search rounded-md flex w-[240px]"
				children={<img src={search} alt="search" />}
				placeholder="Поиск по ID"
			/>
			<div className="flex items-center gap-4">
				<button className="topbar__info flex items-center rounded-md p-2">
					<img src={shoplist} alt="shop list" />
					<span className="text-sm mx-2">Всего: 115</span>
					<img src={chevronDown} alt="shop list" />
				</button>
				<div className="topbar__info flex items-center rounded-md p-2">
					<img src={time} alt="shop list" />
					<span className="text-sm mx-2">45:08</span>
				</div>
			</div>
		</div>
	);
}

export default Topbar;
