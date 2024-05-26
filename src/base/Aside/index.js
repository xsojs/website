import com from "@xso/com";
import css from "@xso/css";
import trigger from "@xso/trigger";

import theme from "../../styles/theme";
import styles from "./styles";
import { Navigate } from "@xso/router";

import Menu from "../../components/Menu";

const {SubMenu, Item} = Menu;

function Aside() {
    const refAside = this.ref();
    const refMenuImage = this.ref();
    const menuOpened = this.state(false);
    this.changes([menuOpened], () => {
        refMenuImage.current.src = menuOpened.val ? '/images/close.svg' : '/images/menu.svg';
        refAside.current.className = css(theme.aside, styles.aside, menuOpened.val ? styles.asideOpen : {});
    });
    trigger.set('ASIDE-MENU-HIDE', () => {
        //refAside.current.className = css(theme.aside, styles.aside);
    });
    const onMenuNavigateClick = () => {
        menuOpened.val = false;
        trigger('ASIDE-MENU-HIDE');
    };
    this.view(() => [
        refAside.set({ aside: {
            class: css(theme.aside, styles.aside),
            _: [
                { div: { // top
                    class: css(styles.top),
                    _: [
                        { div: { // menu
                            class: css(styles.menu),
                            onClick: ()=> {
                                menuOpened.val = !menuOpened.val;
                            },
                            _: [
                                refMenuImage.set({ img: {
                                    src: '/images/menu.svg'
                                } })
                            ]
                        } }, // div.menu
                        { div: { // logo
                            class: css(styles.logo),
                            _: [
                                { img: {
                                   src: '/images/logo.svg'
                                } }
                            ]
                        } } // div.logo
                    ]
                } }, // div.top
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
                                                                onClick: onMenuNavigateClick,
                                                                _: 'Install'
                                                            } }
                                                        }},
                                                        { [Item]: { // How to Use
                                                            _: { [Navigate]: {
                                                                to: '/framework/com#how-to-use',
                                                                onClick: onMenuNavigateClick,
                                                                _: 'How to Use'
                                                            } }
                                                        }},
                                                        { [Item]: { // Properties
                                                            _: { [Navigate]: {
                                                                to: '/framework/com#properties',
                                                                onClick: onMenuNavigateClick,
                                                                _: 'Properties'
                                                            } }
                                                        }},
                                                        { [Item]: { // State
                                                            _: { [Navigate]: {
                                                                to: '/framework/com#state',
                                                                onClick: onMenuNavigateClick,
                                                                _: 'State'
                                                            } }
                                                        }},
                                                        { [Item]: { // Changes
                                                            _: { [Navigate]: {
                                                                to: '/framework/com#changes',
                                                                onClick: onMenuNavigateClick,
                                                                _: 'Changes'
                                                            } }
                                                        }},
                                                        { [Item]: { // Reference
                                                            _: { [Navigate]: {
                                                                to: '/framework/com#reference',
                                                                onClick: onMenuNavigateClick,
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
                                                                onClick: onMenuNavigateClick,
                                                                _: 'Install'
                                                            } }
                                                        }},
                                                        { [Item]: { // How to Use
                                                            _: { [Navigate]: {
                                                                to: '/framework/css#how-to-use',
                                                                onClick: onMenuNavigateClick,
                                                                _: 'How to Use'
                                                            } }
                                                        }},
                                                        { [Item]: { // Selectors
                                                            _: { [Navigate]: {
                                                                to: '/framework/css#selectors',
                                                                onClick: onMenuNavigateClick,
                                                                _: 'Selectors'
                                                            } }
                                                        }},
                                                        { [Item]: { // Media Query
                                                            _: { [Navigate]: {
                                                                to: '/framework/css#media-query',
                                                                onClick: onMenuNavigateClick,
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
                                                                onClick: onMenuNavigateClick,
                                                                _: 'Install'
                                                            } }
                                                        }},
                                                        { [Item]: { // How to Use
                                                            _: { [Navigate]: {
                                                                to: '/framework/router#how-to-use',
                                                                onClick: onMenuNavigateClick,
                                                                _: 'How to Use'
                                                            } }
                                                        }},
                                                        { [Item]: { // Navigate
                                                            _: { [Navigate]: {
                                                                to: '/framework/router#navigate',
                                                                onClick: onMenuNavigateClick,
                                                                _: 'Navigate'
                                                            } }
                                                        }},
                                                        { [Item]: { // navigateTo
                                                            _: { [Navigate]: {
                                                                to: '/framework/router#navigateTo',
                                                                onClick: onMenuNavigateClick,
                                                                _: 'navigateTo'
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
        } }) // aside
    ]);
}

export default com(Aside);