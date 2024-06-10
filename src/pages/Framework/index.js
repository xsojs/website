import com from "@xso/com";
import css from "@xso/css";

import Title from "../../components/Title";
import Grid from "../../components/Grid";

import theme from "../../styles/theme";

import styles from "./styles";

const {Row, Col} = Grid;

function Framework() {
    this.view(() => [
        { div: {
            class: css(theme.frame),
            _: [
                { [Title]: {
                    content: 'Framework'
                } },
                { div: {
                    _: [
                        { p: {
                            _: 'A reactive UI framework, pure JavaScript, no compilations, and all in one.'
                        } },
                        { p: {
                            _: 'Our components support states, properties, and references.'
                        } },
                        { p: {
                            _: 'And yet we have CSS generator, router navigation, global events, and more.'
                        } },
                        { p: {
                            _: 'Here are our main framework modules:'
                        } }
                    ]
                } },
                { [Row]: {
                    _: [
                        { [Col]: {
                            align: 'center',
                            _: [
                                { img: {
                                    class: css(styles.images),
                                    src: 'images/com.svg'
                                } },
                                { p: {
                                    _: 'Componentization'
                                } },
                                { p: {
                                    $: [
                                        { a: {
                                            href: "/framework/com",
                                            _: 'Doc'
                                        } },
                                        ' &middot; ',
                                        { a: {
                                            href: "https://github.com/xsojs/com/",
                                            target: "_blank",
                                            _: 'Source'
                                        } },
                                        ' &middot; ',
                                        { a: {
                                            href: "#",
                                            target: "_blank",
                                            _: 'NPM'
                                        } }
                                    ]
                                } }
                            ]
                        } },
                        { [Col]: {
                            align: 'center',
                            _: [
                                { img: {
                                    class: css(styles.images),
                                    src: 'images/css.svg'
                                } },
                                { p: {
                                    _: 'CSS Generator'
                                } },
                                { p: {
                                    $: [
                                        { a: {
                                            href: "/framework/css",
                                            _: 'Doc'
                                        } },
                                        ' &middot; ',
                                        { a: {
                                            href: "https://github.com/xsojs/css/",
                                            target: "_blank",
                                            _: 'Source'
                                        } },
                                        ' &middot; ',
                                        { a: {
                                            href: "#",
                                            target: "_blank",
                                            _: 'NPM'
                                        } }
                                    ]
                                } }
                            ]
                        } },
                    ]
                } },
                { [Row]: {
                    _: [
                        { [Col]: {
                            align: 'center',
                            _: [
                                { img: {
                                    class: css(styles.images),
                                    src: 'images/router.svg'
                                } },
                                { p: {
                                    _: 'Router'
                                } },
                                { p: {
                                    $: [
                                        { a: {
                                            href: "/framework/router",
                                            _: 'Doc'
                                        } },
                                        ' &middot; ',
                                        { a: {
                                            href: "https://github.com/xsojs/router/",
                                            target: "_blank",
                                            _: 'Source'
                                        } },
                                        ' &middot; ',
                                        { a: {
                                            href: "#",
                                            target: "_blank",
                                            _: 'NPM'
                                        } }
                                    ]
                                } }
                            ]
                        } },
                        { [Col]: {
                            align: 'center',
                            _: [
                                { img: {
                                    class: css(styles.images),
                                    src: 'images/trigger.svg'
                                } },
                                { p: {
                                    _: 'Trigger Global Events'
                                } },
                                { p: {
                                    $: [
                                        { a: {
                                            href: "/framework/trigger",
                                            _: 'Doc'
                                        } },
                                        ' &middot; ',
                                        { a: {
                                            href: "https://github.com/xsojs/trigger/",
                                            target: "_blank",
                                            _: 'Source'
                                        } },
                                        ' &middot; ',
                                        { a: {
                                            href: "#",
                                            target: "_blank",
                                            _: 'NPM'
                                        } }
                                    ]
                                } }
                            ]
                        } },
                    ]
                } },
            ]
        } }
    ]);
}

export default com(Framework);