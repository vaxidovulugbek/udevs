import React from "react";
import { ListProps } from "types/interface";
import { Button, Title } from "ui";
import cn from "classnames";
import "./Card.scss";
import alert from "assets/imgs/icons/alert-circle.svg";
import click from "assets/imgs/icons/Frame 427318704.svg";
import warn from "assets/imgs/icons/Frame 57840.svg";
import watchLater from "assets/imgs/icons/watch_later.svg";
import close from "assets/imgs/icons/Vector.svg";
import done from "assets/imgs/icons/done.svg";
import arrow from "assets/imgs/icons/keyboard_arrow_down.svg";
import doneBlue from "assets/imgs/icons/doneBLUE.svg";

const Card: React.FC<ListProps> = ({ fields, title, className = "", titleColor }) => {
	return (
		<div className="field rounded-md overflow-hidden w-[326px]">
			<Title
				className={cn("mb-2 capitalize p-3 field__title text-white")}
				weight="medium"
				as="h6"
				text={title}
				style={{ background: titleColor }}
			/>
			<ul>
				{fields &&
					fields.map((item, index) => {
						return (
							<li key={index} className="m-2 field__card">
								<div className="flex field__card-border items-center justify-between p-3">
									<p className="flex items-center text-lg font-bold">
										ID: {item?.id}{" "}
										<img className="ms-1" src={alert} alt="alert" />{" "}
									</p>
									<div className="flex items-center font-medium text-xs text-[#6E8BB7] gap-2">
										<span>300 560 сум</span>
										<img src={click} alt="" />
										<img src={warn} alt="" />
									</div>
								</div>
								<div className="p-2 field__card-border">
									<p className="text-sm font-medium text-[#000]">3 x Пепси 0,5</p>
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
									<div className="flex items-center text-xs font-medium text-[#6E8BB7] justify-end mt-2">
										<img className="me-1" src={watchLater} alt="watchLater" />
										15:22
									</div>
								</div>
								<div>
									{item?.preparationComment && (
										<div className="flex justify-between items-center mb-3 p-2">
											<p className="text-sm font-medium text-[#6E8BB7] flex items-center">
												Коментарии(1){" "}
												<span className="field__card-comment rounded-2xl text-xs text-[#fff] flex items-center justify-center ms-1">
													+3
												</span>
											</p>
											<img src={arrow} alt="arrow" />
										</div>
									)}
									{item?.doneBtn && (
										<div className="px-2 pb-2">
											<Button
												className="rounded-md flex items-center justify-center flex-row-reverse py-1 px-2 field__card-doneblue w-full text-[#0E73F6]"
												text="Готово"
												children={
													<img
														className="me-2"
														src={doneBlue}
														alt="done"
													/>
												}
											/>
										</div>
									)}
									{item?.decision && (
										<div className="flex items-center gap-2 p-2">
											<Button
												className="rounded-md flex items-center justify-center flex-row-reverse py-1 px-2 field__card-close w-1/2 text-[#F76659]"
												text="Отменить"
												children={
													<img className="me-2" src={close} alt="close" />
												}
											/>
											<Button
												className="rounded-md flex items-center justify-center flex-row-reverse py-1 px-2 field__card-done w-1/2 text-[#fff]"
												text="Принять"
												children={
													<img
														className="relative right-2"
														src={done}
														alt="close"
													/>
												}
											/>
										</div>
									)}
								</div>
							</li>
						);
					})}
			</ul>
		</div>
	);
};

export default Card;
