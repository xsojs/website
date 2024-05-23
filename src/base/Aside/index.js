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
                                                } },
                                                subMenu: { [SubMenu]: {
                                                    _: [
                                                        { [Item]: { // Install
                                                            _: { [Navigate]: {
                                                                to: '/framework/com#install',
                                                                _: 'Install'
                                                            } }
                                                        }},
                                                        { [Item]: { // How to Use
                                                            _: { [Navigate]: {
                                                                to: '/framework/com#how-to-use',
                                                                _: 'How to Use'
                                                            } }
                                                        }},
                                                        { [Item]: { // Properties
                                                            _: { [Navigate]: {
                                                                to: '/framework/com#properties',
                                                                _: 'Properties'
                                                            } }
                                                        }},
                                                        { [Item]: { // State
                                                            _: { [Navigate]: {
                                                                to: '/framework/com#state',
                                                                _: 'State'
                                                            } }
                                                        }},
                                                        { [Item]: { // Changes
                                                            _: { [Navigate]: {
                                                                to: '/framework/com#changes',
                                                                _: 'Changes'
                                                            } }
                                                        }},
                                                        { [Item]: { // Reference
                                                            _: { [Navigate]: {
                                                                to: '/framework/com#reference',
                                                                _: 'Reference'
                                                            } }
                                                        }},
                                                    ]
                                                } }
                                            }}, // Item.Components
                                            { [Item]: { // CSS
                                                _: { [Navigate]: {
                                                    to: '/framework/css',
                                                    _: 'CSS'
                                                } },
                                                subMenu: { [SubMenu]: {
                                                    _: [
                                                        { [Item]: { // Install
                                                            _: { [Navigate]: {
                                                                to: '/framework/css#install',
                                                                _: 'Install'
                                                            } }
                                                        }},
                                                        { [Item]: { // How to Use
                                                            _: { [Navigate]: {
                                                                to: '/framework/css#how-to-use',
                                                                _: 'How to Use'
                                                            } }
                                                        }},
                                                        { [Item]: { // Selectors
                                                            _: { [Navigate]: {
                                                                to: '/framework/css#selectors',
                                                                _: 'Selectors'
                                                            } }
                                                        }},
                                                        { [Item]: { // Media Query
                                                            _: { [Navigate]: {
                                                                to: '/framework/css#media-query',
                                                                _: 'Media Query'
                                                            } }
                                                        }},
                                                    ]
                                                } },
                                            } }, // Item.CSS
                                            { [Item]: { // Router
                                                _: { [Navigate]: {
                                                    to: '/framework/router',
                                                    _: 'Router'
                                                } },
                                                subMenu: { [SubMenu]: {
                                                    _: [
                                                        { [Item]: { // Install
                                                            _: { [Navigate]: {
                                                                to: '/framework/router#install',
                                                                _: 'Install'
                                                            } }
                                                        }},
                                                        { [Item]: { // How to Use
                                                            _: { [Navigate]: {
                                                                to: '/framework/router#how-to-use',
                                                                _: 'How to Use'
                                                            } }
                                                        }},
                                                    ]
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