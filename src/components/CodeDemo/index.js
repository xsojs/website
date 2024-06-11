import com from "@xso/com";
import css from "@xso/css";

import styles from "./styles";

function CodeDemo({_}) {
    this.view(() => [
        { div: {
            class: css(styles.codeDemo),
            _
        } }
    ]);
}

export default com(CodeDemo);