import { initApplication } from "@omgJS/turbo";

import MainLayout from "layouts/MainLayout";

import Home from "pages/Home";
import Page from "pages/Page";
import PageWithParam from "pages/PageWithParam";
import Menu from "components/Menu";

const routes = {
	"/": {
		template: MainLayout,
		templateParams: {
			content: Home,
			menu: Menu,
		},
		data: "/",
	},
	"/page": {
		template: MainLayout,
		templateParams: {
			content: Page,
			menu: Menu,
		},
	},
	"/page/:param": {
		template: MainLayout,
		templateParams: {
			content: PageWithParam,
			menu: Menu,
		},
	},
};

initApplication(routes);
