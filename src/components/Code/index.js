import com from "@xso/com";
import css from "@xso/css";

import styles from "./styles";

function Code({_}) {
    this.view(()=> [
        { span: {
                class: css(styles.code),
                _
        } }
    ]);
}

export default com(Code);