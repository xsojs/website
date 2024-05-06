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
                        _: 'My XSO component!',
                    } }
                ]);
            }

            export default com(MyXSOComponent);
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
                <title>Components by XSO</title>
            </head>
            <body>
                <h1>XSO Component</h1>
                <div id="myElement"></div>
                <script src="https://github.com/xsojs/com/dist/xso-com.umd.js"></script>
                <script>
                function MyXSOComponent({_}) {
                    this.view(()=> [
                        { div: {
                            _,
                        } }
                    ]);
                }
                com.create(
                    document.getElementById('myElement'), // DOM Element
                    com(MyXSOComponent), // Component Initialized
                    {_: 'My XSO component!'} // Props
                );
                </script>
            </body>
            </html>
            `
        }},
    ]);
}

export default com(HowToUse);