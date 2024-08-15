import React from "react";
import "./App.css";
import { AppProps } from "types/interface";
import { ScrollTop } from "helpers/ScrollToTop";

function App({ children }: AppProps) {
	return (
		<div className="App">
			{children}
			<ScrollTop />
		</div>
	);
}

export default App;
