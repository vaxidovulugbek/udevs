import React from "react";
import { Text } from "ui";
import Sidebar from "components/Sidebar/Sidebar";
import "./Home.scss";
import { Input } from "ui/Input/Input";
import search from "assets/imgs/icons/search.svg";
import shoplist from "assets/imgs/icons/shopping-list.svg";
import chevronDown from "assets/imgs/icons/Chevron down.svg";
import time from "assets/imgs/icons/time.svg";
import Card from "components/Card/Card";

const Home: React.FC = () => {
	return (
		<div className="container-box flex">
			<Sidebar />
			<div className="w-full">
				<header className="header w-full p-4 h-[56px]">
					<Text
						className="text-xl"
						as="span"
						weight="semi-bold"
						text="Cегодняшние заказы"
					></Text>
				</header>
				<main>
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
					<div className="flex p-4 gap-4">
						<Card
							title="Новый (2)"
							titleColor="#0E73F6"
							fields={[
								{
									id: "321545",
									url: "/",
									decision: true,
									children: (
										<div>
											<p className="text-sm font-medium text-[#000]">
												3 x Пепси 0,5
											</p>
											<div className="flex my-3">
												<span className="text-sm font-medium text-[#000] me-1">
													1 x
												</span>
												<div className="text-sm font-medium text-[#000]">
													<p className="text-sm font-medium text-[#000]">
														Гамбургер
													</p>
													<p className="text-xs font-normal text-[#48535B]">
														С сыром
													</p>
													<p className="text-xs font-normal text-[#48535B]">
														Без лука
													</p>
												</div>
											</div>
											<p className="text-sm font-medium text-[#000]">
												2 x Лаваш мясной Standart острый
											</p>
										</div>
									),
								},
								{
									id: "321545",
									url: "/",
									decision: true,
									children: (
										<div>
											<p className="text-sm font-medium text-[#000]">
												3 x Пепси 0,5
											</p>
											<div className="flex my-3">
												<span className="text-sm font-medium text-[#000] me-1">
													1 x
												</span>
												<div className="text-sm font-medium text-[#000]">
													<p className="text-sm font-medium text-[#000]">
														Гамбургер
													</p>
													<p className="text-xs font-normal text-[#48535B]">
														С сыром
													</p>
													<p className="text-xs font-normal text-[#48535B]">
														Без лука
													</p>
												</div>
											</div>
											<p className="text-sm font-medium text-[#000]">
												2 x Лаваш мясной Standart острый
											</p>
										</div>
									),
								},
								{
									id: "321545",
									url: "/",
									decision: true,
									children: (
										<div>
											<p className="text-sm font-medium text-[#000]">
												3 x Пепси 0,5
											</p>
											<div className="flex my-3">
												<span className="text-sm font-medium text-[#000] me-1">
													1 x
												</span>
												<div className="text-sm font-medium text-[#000]">
													<p className="text-sm font-medium text-[#000]">
														Гамбургер
													</p>
													<p className="text-xs font-normal text-[#48535B]">
														С сыром
													</p>
													<p className="text-xs font-normal text-[#48535B]">
														Без лука
													</p>
												</div>
											</div>
											<p className="text-sm font-medium text-[#000]">
												2 x Лаваш мясной Standart острый
											</p>
										</div>
									),
								},
								{
									id: "321545",
									url: "/",
									decision: true,
									children: (
										<div>
											<p className="text-sm font-medium text-[#000]">
												3 x Пепси 0,5
											</p>
											<div className="flex my-3">
												<span className="text-sm font-medium text-[#000] me-1">
													1 x
												</span>
												<div className="text-sm font-medium text-[#000]">
													<p className="text-sm font-medium text-[#000]">
														Гамбургер
													</p>
													<p className="text-xs font-normal text-[#48535B]">
														С сыром
													</p>
													<p className="text-xs font-normal text-[#48535B]">
														Без лука
													</p>
												</div>
											</div>
											<p className="text-sm font-medium text-[#000]">
												2 x Лаваш мясной Standart острый
											</p>
										</div>
									),
								},
							]}
						/>
						<Card
							title="Заготовка (3)"
							titleColor="#F8C51B"
							fields={[
								{
									id: "321545",
									url: "/",
									preparationComment: true,
									doneBtn: true,
									children: (
										<div>
											<div className="flex my-3">
												<span className="text-sm font-medium text-[#000] me-1">
													1 x
												</span>
												<div className="text-sm font-medium text-[#000]">
													<p className="text-sm font-medium text-[#000]">
														Гамбургер
													</p>
													<p className="text-xs font-normal text-[#48535B]">
														С сыром
													</p>
													<p className="text-xs font-normal text-[#48535B]">
														Без лука
													</p>
												</div>
											</div>
										</div>
									),
								},
								{
									id: "321545",
									url: "/",
									children: (
										<div>
											<div className="flex my-3">
												<span className="text-sm font-medium text-[#000] me-1">
													1 x
												</span>
												<div className="text-sm font-medium text-[#000]">
													<p className="text-sm font-medium text-[#000]">
														Big Gamburger
													</p>
													<p className="text-xs font-normal text-[#48535B]">
														С сыром
													</p>
													<p className="text-xs font-normal text-[#48535B]">
														Без лука
													</p>
												</div>
											</div>
											<p className="text-sm font-medium text-[#000]">
												3 x Пепси 0,5
											</p>
											<p className="text-sm font-medium text-[#000]">
												2 x Лаваш мясной Standart острый
											</p>
										</div>
									),
								},
								{
									id: "321545",
									url: "/",
									children: (
										<div>
											<div className="flex my-3">
												<span className="text-sm font-medium text-[#000] me-1">
													1 x
												</span>
												<div className="text-sm font-medium text-[#000]">
													<p className="text-sm font-medium text-[#000]">
														Гамбургер
													</p>
													<p className="text-xs font-normal text-[#48535B]">
														С сыром
													</p>
													<p className="text-xs font-normal text-[#48535B]">
														Без лука
													</p>
												</div>
											</div>
										</div>
									),
								},
							]}
						/>
						<Card
							title="Готов (4)"
							titleColor="#22C348"
							fields={[
								{
									id: "321545",
									url: "/",
									priceDone: true,
									children: (
										<div>
											<p className="text-sm font-medium text-[#000]">
												2 x Лаваш мясной Standart острый
											</p>
										</div>
									),
								},
								{
									id: "321545",
									url: "/",
									priceDone: true,
									children: (
										<div>
											<div className="flex my-3">
												<span className="text-sm font-medium text-[#000] me-1">
													1 x
												</span>
												<div className="text-sm font-medium text-[#000]">
													<p className="text-sm font-medium text-[#000]">
														Big Gamburger
													</p>
													<p className="text-xs font-normal text-[#48535B]">
														С сыром
													</p>
													<p className="text-xs font-normal text-[#48535B]">
														Без лука
													</p>
												</div>
											</div>
											<p className="text-sm font-medium text-[#000]">
												3 x Пепси 0,5
											</p>
											<p className="text-sm font-medium text-[#000]">
												2 x Лаваш мясной Standart острый
											</p>
											<div className="flex my-3">
												<span className="text-sm font-medium text-[#000] me-1">
													1 x
												</span>
												<div className="text-sm font-medium text-[#000]">
													<p className="text-sm font-medium text-[#000]">
														Дабл Бургер
													</p>
													<p className="text-xs font-normal text-[#48535B]">
														С сыром
													</p>
													<p className="text-xs font-normal text-[#48535B]">
														Без лука
													</p>
												</div>
											</div>
										</div>
									),
								},
								{
									id: "321545",
									url: "/",
									priceDone: true,
									children: (
										<div>
											<p className="text-sm font-medium text-[#000]">
												2 x Лаваш мясной Standart острый
											</p>
										</div>
									),
								},
								{
									id: "321545",
									url: "/",
									priceDone: true,
									finishBtn: true,
									children: (
										<div>
											<p className="text-sm font-medium text-[#000]">
												2 x Лаваш мясной Standart острый
											</p>
										</div>
									),
								},
							]}
						/>
						<Card
							title="Курьер в пути (1)"
							titleColor="#1AC19D"
							fields={[
								{
									id: "321545",
									url: "/",
									priceDone: true,
									children: (
										<div>
											<div className="flex my-3">
												<span className="text-sm font-medium text-[#000] me-1">
													1 x
												</span>
												<div className="text-sm font-medium text-[#000]">
													<p className="text-sm font-medium text-[#000]">
														Big Gamburger
													</p>
													<p className="text-xs font-normal text-[#48535B]">
														С сыром
													</p>
													<p className="text-xs font-normal text-[#48535B]">
														Без лука
													</p>
												</div>
											</div>
											<p className="text-sm font-medium text-[#000]">
												3 x Пепси 0,5
											</p>
											<p className="text-sm font-medium text-[#000]">
												2 x Лаваш мясной Standart острый
											</p>
											<div className="flex my-3">
												<span className="text-sm font-medium text-[#000] me-1">
													1 x
												</span>
												<div className="text-sm font-medium text-[#000]">
													<p className="text-sm font-medium text-[#000]">
														Дабл Бургер
													</p>
													<p className="text-xs font-normal text-[#48535B]">
														С сыром
													</p>
													<p className="text-xs font-normal text-[#48535B]">
														Без лука
													</p>
												</div>
											</div>
										</div>
									),
								},
							]}
						/>
					</div>
				</main>
			</div>
		</div>
	);
};

export default Home;
