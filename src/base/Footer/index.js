import com from "@xso/com";
import css from "@xso/css";

import theme from "../../styles/theme";
import styles from "./styles";

function Footer() {
    this.view(() => [
        {
            footer: {
                class: css(theme.footer, styles.footer),
                _: [
                    { div: {
                        class: css(theme.frame),
                        _: [
                            { div: {
                                class: css(theme.frame),
                                _: [
                                    { p: {
                                        _: [
                                            'GitHub organization: ',
                                            { a: {
                                                href: "https://github.com/xsojs",
                                                target: '_blank',
                                                _: 'github.com/xsojs'
                                            }}
                                        ]
                                    } },
                                    { p: {
                                        _: [
                                            'Componentization: ',
                                            { a: {
                                                href: "https://github.com/xsojs/com",
                                                target: '_blank',
                                                _: 'github.com/xsojs/com'
                                            }}
                                        ]
                                    } },
                                    { p: {
                                        _: [
                                            'CSS generator: ',
                                            { a: {
                                                href: "https://github.com/xsojs/css",
                                                target: '_blank',
                                                _: 'github.com/xsojs/css'
                                            }}
                                        ]
                                    } },
                                    { p: {
                                        _: [
                                            'Route navigation: ',
                                            { a: {
                                                href: "https://github.com/xsojs/router",
                                                target: '_blank',
                                                _: 'github.com/xsojs/router'
                                            }}
                                        ]
                                    } },
                                    { p: {
                                        _: [
                                            'Trigger global events: ',
                                            { a: {
                                                href: "https://github.com/xsojs/trigger",
                                                target: '_blank',
                                                _: 'github.com/xsojs/trigger'
                                            }}
                                        ]
                                    } },
                                    { p: {
                                        _: [
                                            'This website is made with XSO: ',
                                            { a: {
                                                href: "https://github.com/xsojs/website",
                                                target: '_blank',
                                                _: 'github.com/xsojs/website'
                                            }}
                                        ]
                                    } }
                                ]
                            } }
                        ]
                    } }
                ]
            }
        }
    ]);
}

export default com(Footer);