import { initApplication } from "@omgjs/turbo";

import MainLayout from "layouts/MainLayout";

import Home from "pages/Home";
import Page from "pages/Page";
import PageWithParam from "pages/PageWithParam";
import PageWithParams2 from "pages/PageWithParams2";
import Menu from "components/Menu";

const routes = {
	"/": {
		template: MainLayout,
		templateParams: {
			content: Home,
			menu: Menu,
		},
	},
	"/page": {
		template: MainLayout,
		templateParams: {
			content: Page,
			menu: Menu,
		},
		data: "https://api.github.com/orgs/omgjs/repos",
	},
	"/page/:param": {
		template: MainLayout,
		templateParams: {
			content: PageWithParam,
			menu: Menu,
		},
	},
	"/page2/:param": {
		template: MainLayout,
		templateParams: {
			content: PageWithParams2,
			menu: Menu,
		},
	},
};

initApplication(routes);
