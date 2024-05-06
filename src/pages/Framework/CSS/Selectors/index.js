import com from "@xso/com";

import Anchor from "../../../../components/Anchor";
import Title from "../../../../components/Title";
import CodeTabs from "../../../../components/CodeTabs";

function Install() {
    this.view(() => [
        { [Anchor]: {
            name: 'selectors'
        } },
        { [Title]: {
            level: 3,
            content: 'Selectors'
        } },
        { p: {
            _: [
                'Can use any sector from Style/CSS and LESS/SASS.'
            ]
        } },
        { p: {
            _: 'Here a simple example of a style object:'
        } },
        { [CodeTabs]: {
            tabs: [
                { [CodeTabs.Tab]: {
                    label: 'styles.js',
                    active: true,
                    source: `
                        const styles = {
                            container: {,
                                padding: '10px',
                                '&:hover': {
                                    backgroundColor: 'yellow'
                                }
                                '> a': {
                                    color: 'green',
                                    ':hover': {
                                        color: 'red'
                                    }
                                },
                                ' p': {
                                    backgroundColor: 'cyan'
                                },
                                ' p.highlight': {
                                    border: '2px solid red',
                                    backgroundColor: 'orange'
                                }
                            }
                        };

                        export default styles;
                    `
                } }, // CodeTabs.Tab[0] - styles
                { [CodeTabs.Tab]: {
                    label: 'index.js (XSO)',
                    source: `
                        import com from "@xso/com";
                        import css from "@xso/css";

                        import styles from "./styles";

                        function BlockXSO() {
                            this.view(() => [
                                { div: {
                                    class: css(styles.container),
                                    _: [
                                        { p: {
                                            _: [
                                                'Here is my ',
                                                { a: {
                                                    href: '#',
                                                    _: 'Link'
                                                } },
                                                ' styled.',
                                            ]
                                        } }, // p
                                        { div: {
                                            _: [
                                                { p: {
                                                    _: 'Here an inner text styled.'
                                                } }
                                                { p: {
                                                    class: 'highlight',
                                                    _: 'Highlight content.'
                                                } }
                                            ]
                                        } } // div
                                    ]
                                } }
                            ]);
                        }

                        export default com(BlockXSO);
                    `
                } }, // CodeTabs.Tab[1] - XSO
                { [CodeTabs.Tab]: {
                    label: 'index.js (React)',
                    source: `
                        import React from 'react';
                        import css from "@xso/css";
                        import styles from "./styles";

                        function Block() {
                            return (
                                <div className={ css(styles.container) }>
                                    <p>Here is my <a href="#">Link</a> styled.</p>
                                    <div>
                                        <p>Here an inner text styled.</p>
                                        <p className="highlight">Highlight content.</p>
                                    </div>
                                </div>
                            );
                        }

                        export default Block;
                    `
                } }, // CodeTabs.Tab[2] - React
            ]
        } }, // CodeTabs
    ]);
}

export default com(Install);