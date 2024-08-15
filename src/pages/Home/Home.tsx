import Card from "components/Card/Card";
import Sidebar from "components/Sidebar/Sidebar";
import React from "react";
import { Text } from "ui";
import "./Home.scss";
import Topbar from "components/Topbar/Topbar";

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
					<Topbar />
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
