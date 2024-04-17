import com from "@xso/com";
import css from "@xso/css";

import Title from "../../components/Title";
import CodeTabs from "../../components/CodeTabs";

import theme from "../../styles/theme";

function Home() {
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
                        } },
                        { p: {
                            _: 'Components, States, Properties, References, Global Events, CSS engine, and more.'
                        } },
                        { p: {
                            _: 'Components, States, Properties, References, Global Events, CSS engine, and more.'
                        } },
                        { p: {
                            _: 'Components, States, Properties, References, Global Events, CSS engine, and more.'
                        } },
                        { p: {
                            _: 'Components, States, Properties, References, Global Events, CSS engine, and more.'
                        } },
                        { p: {
                            _: 'Components, States, Properties, References, Global Events, CSS engine, and more.'
                        } },
                        { p: {
                            _: 'Components, States, Properties, References, Global Events, CSS engine, and more.'
                        } },
                        { p: {
                            _: 'Components, States, Properties, References, Global Events, CSS engine, and more.'
                        } },
                        { p: {
                            _: 'Components, States, Properties, References, Global Events, CSS engine, and more.'
                        } },
                        { p: {
                            _: 'Components, States, Properties, References, Global Events, CSS engine, and more.'
                        } },
                        { p: {
                            _: 'Components, States, Properties, References, Global Events, CSS engine, and more.'
                        } },
                        { p: {
                            _: 'Components, States, Properties, References, Global Events, CSS engine, and more.'
                        } },
                        { p: {
                            _: 'Components, States, Properties, References, Global Events, CSS engine, and more.'
                        } },
                    ]
                } },
                { [Title]: {
                    content: 'Basic Example'
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
                                        {
                                            button: {
                                                onClick: ()=> { counter.$value++; },
                                                _: \`Click \${counter}\`
                                            }
                                        },
                                        refText.set({
                                            div: {
                                                class: css(styles.text),
                                                _: content
                                            }
                                        })
                                    ]);
                                }
                            `
                        } },
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
                        } }
                    ]
                } }
            ]
        } }
    ]);
}

export default com(Home);