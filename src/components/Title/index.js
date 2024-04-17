import com from "@xso/com";
import css from "@xso/css";

import styles from "./styles";

function Title({ content }) {
    this.view(() => [
        { h1: {
            class: css(styles.title),
            _: content
        } }
    ]);
}

export default com(Title);