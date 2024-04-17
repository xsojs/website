import com from "@xso/com";
import css from "@xso/css";

import styles from "./styles";

function Code({text}) {
    this.view(()=> [
        { span: {
                class: css(styles.code),
                _: text
        } }
    ]);
}

export default com(Code);