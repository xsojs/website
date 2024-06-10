import com from "@xso/com";
import css from "@xso/css";

import Title from "../../../components/Title";
import Install from "./Install";
import HowToUse from "./HowToUse";
import Navigate from "./Navigate";
import NavigateTo from "./NavigateTo";

import theme from "../../../styles/theme";

function Trigger() {
    this.view(() => [
        { div: {
            class: css(theme.frame),
            _: [
                { [Title]: {
                    content: 'Trigger'
                } },
                { div: {
                    _: [
                        { p: {
                            _: 'It is easy to make global events between components.'
                        } },
                        { p: {
                            _: 'A straightforward approach to sharing functions with any components, using an identification key to the function.'
                        } },
                        { p: {
                            _: 'You can assign many functions to the same identification key to trigger together.'
                        } }
                    ]
                } },
                { [Install]: { } },
                { [HowToUse]: { } },
                { [Navigate]: { } },
                { [NavigateTo]: { } },
            ]
        } }
    ]);
}

export default com(Trigger);