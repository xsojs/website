import com from "@xso/com";
import css from "@xso/css";

import styles from "./styles";

const Row = com(function ({_}) {
    com.ensureType(_, Col);
    this.view(()=> [
        { div: {
            class: css(styles.row(_)),
            _
        } }
    ]);
});

const Col = com(function (props) {
    const {_} = props;
    this.view(()=> [
        { div: {
            class: css(styles.col(props)),
            _
        } }
    ]);
});

export default {Row, Col};
