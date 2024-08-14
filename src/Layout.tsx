import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import RoutesPath from "./helpers/RoutesPath";
import App from "./App";

const Home = lazy(() => import("./pages/Home/Home"));

const routes = [{ path: RoutesPath?.home, element: <Home /> }];

export const AllRoutes: React.FC = () => {
	return (
		<App>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					{routes.map(({ path, element }, i) => (
						<Route key={i} path={path} element={element} />
					))}
				</Routes>
			</Suspense>
		</App>
	);
};
