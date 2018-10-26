import { initApplication } from "@omgJS/turbo";

import MainLayout from "layouts/MainLayout";

import Home from "pages/Home";
import Page from "pages/Page";
import PageWithParam from "pages/PageWithParam";

const routes = {
	"/": {
		template: MainLayout,
		templateParams: {
			content: Home,
		},
	},
	"/page": {
		template: MainLayout,
		templateParams: {
			content: Page,
		},
	},
	"/page/:param": {
		template: MainLayout,
		templateParams: {
			content: PageWithParam,
		},
	},
};

initApplication(routes);
