import com from "@xso/com";
import css from "@xso/css";
import trigger from "@xso/trigger";

import theme from "../../styles/theme";
import styles from "./styles";
import { Navigate } from "@xso/router";

import Menu from "../../components/Menu";
import SVG from "../../components/SVG";

const {SubMenu, Item} = Menu;

function Aside() {
    const refAside = this.ref();
    const refMenuImage = this.ref();
    const refCloseImage = this.ref();
    const menuOpened = this.state(false);
    const onMenuClicked = ()=> {
        if (menuOpened.val) {
            refMenuImage.current._hide();
            refCloseImage.current._show();
        } else {
            refMenuImage.current._show();
            refCloseImage.current._hide();
        }
        refAside.current.className = css(theme.aside, styles.aside, menuOpened.val ? styles.asideOpen : {});
    };
    this.mount(onMenuClicked);
    this.changes([menuOpened], onMenuClicked);
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
                        { a: { // menu
                            class: css(styles.menu),
                            onClick: ()=> {
                                menuOpened.val = !menuOpened.val;
                            },
                            _: [
                                refMenuImage.set({ [SVG]: {
                                    src: '/images/menu.svg'
                                } }),
                                refCloseImage.set({ [SVG]: {
                                    src: '/images/close.svg'
                                } })
                            ]
                        } }, // a.menu
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
                                                        { [Item]: { // Mount
                                                            _: { [Navigate]: {
                                                                to: '/framework/com#mount',
                                                                onClick: onMenuNavigateClick,
                                                                _: 'Mount'
                                                            } }
                                                        }},
                                                        { [Item]: { // Unmount
                                                            _: { [Navigate]: {
                                                                to: '/framework/com#unmount',
                                                                onClick: onMenuNavigateClick,
                                                                _: 'Unmount'
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
                                            { [Item]: { // Trigger
                                                _: { [Navigate]: {
                                                    to: '/framework/trigger',
                                                    _: 'Trigger'
                                                } },
                                                subMenu: { [SubMenu]: {
                                                    _: [
                                                        { [Item]: { // Install
                                                            _: { [Navigate]: {
                                                                to: '/framework/trigger#install',
                                                                onClick: onMenuNavigateClick,
                                                                _: 'Install'
                                                            } }
                                                        }},
                                                        { [Item]: { // How to Use
                                                            _: { [Navigate]: {
                                                                to: '/framework/trigger#how-to-use',
                                                                onClick: onMenuNavigateClick,
                                                                _: 'How to Use'
                                                            } }
                                                        }},
                                                        { [Item]: { // Get
                                                            _: { [Navigate]: {
                                                                to: '/framework/trigger#get',
                                                                onClick: onMenuNavigateClick,
                                                                _: 'Get'
                                                            } }
                                                        }},
                                                        { [Item]: { // Add
                                                            _: { [Navigate]: {
                                                                to: '/framework/trigger#add',
                                                                onClick: onMenuNavigateClick,
                                                                _: 'Add'
                                                            } }
                                                        }},
                                                        { [Item]: { // Set
                                                            _: { [Navigate]: {
                                                                to: '/framework/trigger#set',
                                                                onClick: onMenuNavigateClick,
                                                                _: 'Set'
                                                            } }
                                                        }},
                                                        { [Item]: { // Del
                                                            _: { [Navigate]: {
                                                                to: '/framework/trigger#del',
                                                                onClick: onMenuNavigateClick,
                                                                _: 'Del'
                                                            } }
                                                        }},
                                                        { [Item]: { // Stored
                                                            _: { [Navigate]: {
                                                                to: '/framework/trigger#stored',
                                                                onClick: onMenuNavigateClick,
                                                                _: 'Stored'
                                                            } }
                                                        }},
                                                        { [Item]: { // Events
                                                            _: { [Navigate]: {
                                                                to: '/framework/trigger#events',
                                                                onClick: onMenuNavigateClick,
                                                                _: 'Events'
                                                            } }
                                                        }},
                                                        { [Item]: { // Clear
                                                            _: { [Navigate]: {
                                                                to: '/framework/trigger#clear',
                                                                onClick: onMenuNavigateClick,
                                                                _: 'Clear'
                                                            } }
                                                        }},
                                                        
                                                        { [Item]: { // Exists
                                                            _: { [Navigate]: {
                                                                to: '/framework/trigger#exists',
                                                                onClick: onMenuNavigateClick,
                                                                _: 'Exists'
                                                            } }
                                                        }},
                                                        { [Item]: { // Purge
                                                            _: { [Navigate]: {
                                                                to: '/framework/trigger#purge',
                                                                onClick: onMenuNavigateClick,
                                                                _: 'Purge'
                                                            } }
                                                        }},
                                                    ]
                                                } }
                                            }}, // Item.Trigger
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