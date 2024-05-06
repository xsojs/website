import com from "@xso/com";
import css from "@xso/css";

import Title from "../../../components/Title";
import Install from "./Install";
import HowToUse from "./HowToUse";

import theme from "../../../styles/theme";

function Router() {
    this.view(() => [
        { div: {
            class: css(theme.frame),
            _: [
                { [Title]: {
                    content: 'Router'
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
                { [Install]: { } },
                { [HowToUse]: { } },
            ]
        } }
    ]);
}

export default com(Router);