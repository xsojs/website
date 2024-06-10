import com from "@xso/com";
import css from "@xso/css";

import { Router, Route } from "@xso/router";

import Home from '../../pages/Home';
import About from '../../pages/About';
import Product from '../../pages/Product';
import Framework from '../../pages/Framework';
import FrameworkCom from '../../pages/Framework/Com';
import FrameworkCSS from '../../pages/Framework/CSS';
import FrameworkRouter from '../../pages/Framework/Router';
import FrameworkTrigger from '../../pages/Framework/Trigger';

import styles from "./styles";

function Main() {
    this.view(()=> [
        {
            main: {
                class: css(styles.main),
                _: [
                    {
                        [Router]: {
                            routes: [
                                { [Route]: {
                                    path: '/',
                                    component: Home
                                } },
                                { [Route]: {
                                    path: '/about',
                                    component: About
                                } },
                                { [Route]: {
                                        path: '/framework',
                                        component: Framework
                                } },
                                { [Route]: {
                                        path: '/framework/com',
                                        component: FrameworkCom
                                } },
                                { [Route]: {
                                        path: '/framework/css',
                                        component: FrameworkCSS
                                } },
                                { [Route]: {
                                        path: '/framework/router',
                                        component: FrameworkRouter
                                } },
                                { [Route]: {
                                        path: '/framework/trigger',
                                        component: FrameworkTrigger
                                } },
                                { [Route]: {
                                        path: '/product/{uid}/{name}',
                                        component: Product
                                } }
                            ]
                        }
                    }
                ]
            }
        }
    ]);
}

export default com(Main);
