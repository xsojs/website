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
                                    'Footer...'
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