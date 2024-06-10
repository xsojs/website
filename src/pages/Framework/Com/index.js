import com from "@xso/com";
import css from "@xso/css";

import Title from "../../../components/Title";
import Install from "./Install";
import HowToUse from "./HowToUse";
import Properties from "./Properties";
import State from "./State";
import Changes from "./Changes";
import Reference from "./Reference";
import Mount from "./Mount";
import Unmount from "./Unmount";

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
                            _: 'This is the componentization module, that creates reactive UI in the browser.'
                        } },
                        { p: {
                            _: 'With no compilations, it is pure JavaScript and can be used directly in HTML.'
                        } },
                        { p: {
                            _: 'Supports components, states, properties, references, and more.'
                        } }
                    ]
                } },
                { [Install]: { } },
                { [HowToUse]: { } },
                { [Properties]: { } },
                { [State]: { } },
                { [Changes]: { } },
                { [Reference]: { } },
                { [Mount]: { } },
                { [Unmount]: { } },
            ]
        } }
    ]);
}

export default com(Com);