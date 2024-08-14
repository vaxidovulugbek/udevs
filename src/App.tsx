import React from "react";
import "./App.css";
import { AppProps } from "types/interface";

function App({ children }: AppProps) {
	return <div className="App">{children}</div>;
}

export default App;
