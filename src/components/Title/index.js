import com from "@xso/com";
import css from "@xso/css";

import styles from "./styles";

function Title({ content, level = 1 }) {
    this.view(() => [
        { [`h${level}`]: {
            class: css(styles.title, styles[`level${level}`]),
            _: content
        } }
    ]);
}

export default com(Title);