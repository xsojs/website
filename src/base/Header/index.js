import com from "@xso/com";
import css from "@xso/css";

import theme from "../../styles/theme";
import styles from "./styles";

function Header() {
    this.view(() => [
        { header: {
            class: css(theme.header, styles.header),
            _: [
                { div: {
                    class: css(theme.frame),
                    _: [
                        { div: {
                            class: css(styles.links),
                            _: [
                                { a: {
                                    target: '_blank',
                                    href: 'https://github.com/xsojs/',
                                    _: [
                                        { img: {
                                            src: '/images/github.svg'
                                        } }
                                    ]
                                }}
                            ]
                        } }
                    ]
                } }
            ]
        } }
    ]);
}

export default com(Header);