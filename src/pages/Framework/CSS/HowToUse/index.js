import com from "@xso/com";

import Title from "../../../../components/Title";
import CodeBlock from "../../../../components/CodeBlock";

function HowToUse() {
    this.view(() => [
        { [Title]: {
            level: 3,
            content: 'How To Use'
        } },
        { p: {
            _: [
                'You can mix the object of styles in any JS file, more elegant is to create a separate file called ',
                { code: { _: 'styles.js' } },
                '.'
            ]
        } },
        { p: {
            _: 'Then you just need to create an JS object with your styles definition, like:'
        } },
        { [CodeBlock]: {
            source: `
            const styles = {
                myFirstStyle: {
                    fontSize: '16px',
                    border: '3px solid blue',
                    backgroundColor: 'red',
                    color: 'yellow',
                }
            }
            export default styles;
            `
        }},
        { [Title]: {
            level: 5,
            content: 'XSO Component'
        } },
        { p: {
            _: 'Here is a simple example of the integration with XSO component:'
        } },
        { [CodeBlock]: {
            source: `
            import com from '@xso/com';
            import css from '@xso/css';

            import styles from './styles.js';

            function MyXSOComponent() {
                this.view(()=> [
                    { div: {
                        class: css(styles.myFirstStyle),
                        _: 'My component styled!',
                    } }
                ]);
            }

            export default com(MyXSOComponent);
            `
        }},
        { [Title]: {
            level: 5,
            content: 'React Component'
        } },
        { p: {
            _: 'Here is a simple example of the integration with React component:'
        } },
        { [CodeBlock]: {
            source: `
            import React from 'react';
            import css from '@xso/css';

            import styles from './styles.js';

            function MyReactComponent() {
                return (
                    <div className={ css(styles.myFirstStyle) }>
                        My React Component styled with XSO.
                    </div>
                );
            }

            export default MyReactComponent;
            `
        }},
        { [Title]: {
            level: 5,
            content: 'HTML + JS Vanilla'
        } },
        { p: {
            _: 'Here is a full example of how to use in raw HTML with pure JavaScript:'
        } },
        { [CodeBlock]: {
            language: 'html',
            source: `
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Styled by XSO</title>
            </head>
            <body>
                <h1>XSO CSS</h1>
                <div id="myElement">My component styled!</div>
                <script src="https://github.com/xsojs/css/dist/xso-css.umd.js"></script>
                <script>
                const styles = {
                    myFirstStyle: {
                        fontSize: '16px',
                        border: '3px solid blue',
                        backgroundColor: 'red',
                        color: 'yellow',
                    }
                }
                document.getElementById('myElement').className = css(
                    styles.myFirstStyle
                );
                </script>
            </body>
            </html>
            `
        }},
    ]);
}

export default com(HowToUse);