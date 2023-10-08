import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import App from "./App";
import Images from "./components/Images";
import Header from "./components/Header";
import GoHomeBtn from "./components/GoHomeBtn";

const Routers = () => {
	const [isHome, setIsHome] = useState(true);
	const { pathname } = useLocation();

	useEffect(() => {
		if (pathname === "/") {
			// HomeFooter will be shown only on home page{app component}
			setIsHome(true);
		} else setIsHome(false);
	}, [pathname]);
	return (
		<>
			<Header title="Photo Gallery" subtitle="A Photo Gallery App " />
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/images" element={<Images />} />
			</Routes>

			{isHome ? null : <GoHomeBtn />}
		</>
	);
};

export default Routers;
