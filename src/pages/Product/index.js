import com from "@xso/com";
import css from "@xso/css";
import { navigateTo } from "@xso/router";

import Title from "../../components/Title";

import theme from "../../styles/theme";

function Product({route}) {
    this.view(() => [
        { a: {
            onClick: ()=> navigateTo('/'),
            _: 'Main'
        } },
        { div: {
            class: css(theme.frame),
            _: [
                { [Title]: {
                    content: route.params.uid
                } },
                { [Title]: {
                    content: route.params.name
                } }
            ]
        } }
    ]);
}

export default com(Product);