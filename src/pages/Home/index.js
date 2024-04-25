import com from "@xso/com";
import css from "@xso/css";

import Grid from "../../components/Grid";
import Title from "../../components/Title";
import CodeTabs from "../../components/CodeTabs";

import theme from "../../styles/theme";

import styles from "./styles";

const {Row, Col} = Grid;

function Home() {
    this.view(() => [
        { div: { // main
            class: css(theme.frame),
            _: [
                { [Title]: {
                    content: 'UI Framework'
                } },
                { [Row]: {
                    _: [
                        { [Col]: {
                            align: 'center',
                            _: [
                                { img: {
                                    class: css(styles.images),
                                    src: 'images/lightning.svg'
                                } },
                                { p: {
                                    _: 'Reactive Without Compilation'
                                } }
                            ]
                        } },
                        { [Col]: {
                            align: 'center',
                            _: [
                                { img: {
                                    class: css(styles.images),
                                    src: 'images/js.svg'
                                } },
                                { p: {
                                    _: 'Pure JavaScript Code'
                                } }
                            ]
                        } },
                    ]
                } },
                { div: { // introduction
                    _: [
                        { p: {
                            _: 'Here you will find a reactive UI framework, where all code is in pure JavaScript only, nothing is compiled, and you have all you need.'
                        } },
                        { p: {
                            _: 'All you need means Components, States, Properties, References, Global Events, a CSS engine, a Router, and much more.'
                        } },
                    ]
                } }, // div.introduction
                { [Title]: {
                    content: 'First Look'
                } },
                { p: {
                    _: 'See this basic example very carefully.'
                } },
                { [CodeTabs]: {
                    tabs: [
                        { [CodeTabs.Tab]: {
                            label: 'index.js',
                            active: true,
                            source: `
                                import com from "@xso/com";
                                import css from "@xso/css";
    
                                import styles from "./styles";
    
                                function Code({content}) {
                                    const counter = this.state(0);
                                    const refText = this.ref();
                                    this.changes([refText], () => {
                                        refText.current.style.border = '2px solid gray';
                                    });
                                    this.view(() => [
                                        { button: {
                                            onClick: ()=> { counter.$value++; },
                                            _: \`Click \${counter}\`
                                        } },
                                        refText.set({ div: {
                                            class: css(styles.text),
                                            _: content
                                        } })
                                    ]);
                                }
                            `
                        } }, // CodeTabs.Tab[0]
                        { [CodeTabs.Tab]: {
                            label: 'styles.js',
                            source: `
                                import theme from "../../styles/theme";

                                const styles = {
                                    text: {
                                        ...theme.blockSpace,
                                        padding: '20px',
                                        borderRadius: '20px',
                                        boxShadow: '0 0 10px black',
                                        ...theme.text
                                    }
                                };

                                export default styles;
                            `
                        } } // CodeTabs.Tab[1]
                    ]
                } }, // CodeTabs
                { p: {
                    _: 'You may be thinking: Is all integrated in a single code language!?'
                } },
                { p: {
                    _: `Yes is it! Let's put your hands and see it.`
                } },
                { p: {
                    _: 'All JavaScript capabilities are available to anything and anywhere in your code.'
                } },
            ]
        } } // div.main
    ]);
}

export default com(Home);