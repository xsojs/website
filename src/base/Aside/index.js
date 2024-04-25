import com from "@xso/com";
import css from "@xso/css";

import theme from "../../styles/theme";
import styles from "./styles";
import { Navigate } from "@xso/router";

import Menu from "../../components/Menu";

const {SubMenu, Item} = Menu;

function Aside() {
    this.view(() => [
        { aside: {
            class: css(theme.aside, styles.aside),
            _: [
                { div: { // logo
                    class: css(styles.logo),
                    _: [
                        { img: {
                            src: '/images/logo.svg'
                        } }
                    ]
                } }, // div.logo
                { nav: {
                    class: css(styles.navigation),
                    _: [
                        { [Menu]: {
                            _: [
                                { [Item]: { // Home
                                    _: { [Navigate]: {
                                        to: '/',
                                        activeClass: 'active',
                                        _: 'Home'
                                    } }
                                }}, // Item.Home
                                { [Item]: { // Framework
                                    _: [
                                        { [Navigate]: {
                                            to: '/framework',
                                            _: 'Framework'
                                        } }
                                    ],
                                    subMenu: { [SubMenu]: {
                                        _: [
                                            { [Item]: { // Components
                                                _: { [Navigate]: {
                                                    to: '/framework/com',
                                                    _: 'Components'
                                                } }
                                            }}, // Item.Components
                                            { [Item]: { // CSS
                                                _: { [Navigate]: {
                                                    to: '/framework/css',
                                                    _: 'CSS'
                                                } }
                                            }}, // Item.CSS
                                            { [Item]: { // Router
                                                _: { [Navigate]: {
                                                    to: '/framework/router',
                                                    _: 'Router'
                                                } }
                                            }}, // Item.Router
                                        ]
                                    } } // SubMenu
                                }}, // Item.Framework
                                { [Item]: { // Home
                                    _: { [Navigate]: {
                                        to: '/about',
                                        activeClass: 'active',
                                        _: 'About'
                                    } }
                                }}, // Item.Home
                            ]
                        } } // Menu
                    ]
                }} // nav
            ]
        } } // aside
    ]);
}

export default com(Aside);