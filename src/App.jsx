import { initApplication } from "@omgjs/turbo";

import Home from "pages/Home";
import Page from "pages/Page";
import PageWithParam from "pages/PageWithParam";

const routes = {
	"/": Home,
	"/page": Page,
	"/page/:param": PageWithParam,
};

initApplication(routes);
