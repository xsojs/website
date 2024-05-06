import com from "@xso/com";
import css from "@xso/css";

import styles from "./styles";

function Anchor(props) {
    this.view(()=> [
        { a: {
            class: css(styles.anchor),
            ...props,
            _: 'teste'
        } }
    ]);
}

export default com(Anchor);