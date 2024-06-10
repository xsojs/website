import com from "@xso/com";
import css from "@xso/css";

import Title from "../../components/Title";

import theme from "../../styles/theme";

function About() {
    this.view(() => [
        { div: {
            class: css(theme.frame),
            _: [
                { [Title]: {
                    content: 'About'
                } },
                { div: {
                    _: [
                        { p: {
                            _: 'Yes! It is another UI/JS framework, but here is pure JavaScript with no compilations, and with many asteroids such as CSS engine, Router, Trigger global events, and more.'
                        } },
                        { p: {
                            _: 'Here you have another approach to making reactive web components, with all-in-one.'
                        } },
                        { p: {
                            _: 'This entire website is done by XSO framework, see the source code.'
                        } },
                        { p: {
                            _: 'We have much more work that can be done, and you are invited and very welcome.'
                        } },
                        { p: {
                            _: 'You can collaborate in the GitHub repos given stars, reporting issues, with forks, or even be part of the team.'
                        } },
                        { p: {
                            _: 'As you use this framework, or even only some modules, you be able to see how is easy to use with other technologies.'
                        } },
                        { p: {
                            _: 'With innovative approaches, we have no limits, and much yet will come.'
                        } },
                        { p: {
                            _: 'Have fun and happy coding.'
                        } }
                    ]
                } },
            ]
        } }
    ]);
}

export default com(About);