import com from "@xso/com";
import css from "@xso/css";

import Title from "../../../components/Title";

import theme from "../../../styles/theme";

function Com() {
    this.view(() => [
        { div: {
            class: css(theme.frame),
            _: [
                { [Title]: {
                    content: 'Components'
                } },
                { div: {
                    _: [
                        { p: {
                            _: 'A reactive UI framework, pure JavaScript, no compilations, and all in one.'
                        } },
                        { p: {
                            _: 'Components, States, Properties, References, Global Events, CSS engine, and more.'
                        } }
                    ]
                } },
            ]
        } }
    ]);
}

export default com(Com);