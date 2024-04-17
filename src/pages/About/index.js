import com from "@xso/com";
import css from "@xso/css";

import Title from "../../components/Title";

import theme from "../../styles/theme";

function About() {
    this.view(() => [
        { div: {
            class: css(theme.frame),
            _: [
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
                { [Title]: {
                    content: 'About'
                } }
            ]
        } }
    ]);
}

export default com(About);