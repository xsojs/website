import com from "@xso/com";
import css from "@xso/css";

import Title from "../../../components/Title";
import Install from "./Install";
import HowToUse from "./HowToUse";
import Get from "./Get";
import Add from "./Add";
import Set from "./Set";
import Del from "./Del";

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
                            _: 'A straightforward approach to sharing functions between components, using an identification key assigned to the function, you can fire with any argument.'
                        } },
                        { p: {
                            _: 'You can even assign many functions to the same identification key to trigger together.'
                        } }
                    ]
                } },
                { [Install]: { } },
                { [HowToUse]: { } },
                { [Get]: { } },
                { [Add]: { } },
                { [Set]: { } },
                { [Del]: { } },
            ]
        } }
    ]);
}

export default com(Trigger);