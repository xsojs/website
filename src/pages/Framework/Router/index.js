import com from "@xso/com";
import css from "@xso/css";

import Title from "../../../components/Title";
import Install from "./Install";
import HowToUse from "./HowToUse";
import Navigate from "./Navigate";
import NavigateTo from "./NavigateTo";

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
                            _: 'Manages the content related with the link used in the browser.'
                        } },
                        { p: {
                            _: 'Supports route definition with parameters, were each route shows a specific component.'
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

export default com(Router);