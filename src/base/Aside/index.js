import com from "@xso/com";
import css from "@xso/css";

import theme from "../../styles/theme";
import styles from "./styles";
import { Navigate } from "@xso/router";

function Aside() {
    this.view(() => [
        { aside: {
            class: css(theme.aside, styles.aside),
            _: [
                { div: {
                    class: css(styles.logo),
                    _: [{
                        img: {
                            src: '/images/logo.svg'
                        }
                    }]
                } },
                { nav: {
                    class: css(styles.navigation),
                    _: [
                        { ul: {
                            _: [
                                { li: {
                                    _: [
                                        { [Navigate]: {
                                            to: '/',
                                            activeClass: 'active',
                                            _: 'Home'
                                        } }
                                    ]
                                }},
                                { li: {
                                    _: [
                                        { [Navigate]: {
                                            to: '/framework',
                                            _: 'Framework'
                                        } },
                                        { ul: {
                                            _: [
                                                { li: {
                                                    _: [ { [Navigate]: {
                                                        to: '/framework/com',
                                                        _: 'Components'
                                                    } } ]
                                                } },
                                                { li: {
                                                    _: [ { [Navigate]: {
                                                        to: '/framework/css',
                                                        _: 'CSS'
                                                    } } ]
                                                } },
                                                { li: {
                                                    _: [ { [Navigate]: {
                                                        to: '/framework/router',
                                                        _: 'CSS'
                                                    } } ]
                                                } }
                                            ]
                                        } }
                                    ]
                                }},
                                { li: {
                                    _: [
                                        { [Navigate]: {
                                            to: '/about',
                                            _: 'About'
                                        } }
                                    ]
                                }},
                                { li: {
                                    _: [
                                        { [Navigate]: {
                                            to: '/about',
                                            _: 'About'
                                        } }
                                    ]
                                }},
                                { li: {
                                    _: [
                                        { [Navigate]: {
                                            to: '/about',
                                            _: 'About'
                                        } }
                                    ]
                                }},
                                { li: {
                                    _: [
                                        { [Navigate]: {
                                            to: '/about',
                                            _: 'About'
                                        } }
                                    ]
                                }},
                                { li: {
                                    _: [
                                        { [Navigate]: {
                                            to: '/about',
                                            _: 'About'
                                        } }
                                    ]
                                }}
                            ]
                        }}
                    ]
                }}
            ]
        } }
    ]);
}

export default com(Aside);