import com from "@xso/com";
import css from "@xso/css";

import Title from "../../../components/Title";

import theme from "../../../styles/theme";

import Install from "./Install";
import HowToUse from "./HowToUse";
import Selectors from "./Selectors";
import MediaQuery from "./MediaQuery";

function CSS() {
    this.view(() => [
        { div: {
            class: css(theme.frame),
            _: [
                { [Title]: {
                    content: 'CSS'
                } },
                { p: {
                    _: 'Here is the CSS module, with this you will be able to create all your style dinamically with advanced technics.'
                } },
                { p: {
                    _: 'The same techniques are found in others, such as LESS, SASS/SCSS, and StyleX.'
                } },
                { [Install]: { } },
                { [HowToUse]: { } },
                { [Selectors]: { } },
                { [MediaQuery]: { } }
            ]
        } }
    ]);
}

export default com(CSS);