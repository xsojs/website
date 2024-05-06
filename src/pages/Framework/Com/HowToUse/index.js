import com from "@xso/com";

import Title from "../../../../components/Title";
import CodeBlock from "../../../../components/CodeBlock";

function HowToUse() {
    this.view(() => [
        { a: {
            name: 'how-to-use'
        }},
        { [Title]: {
            level: 3,
            content: 'How To Use'
        } },
        { p: {
            _: 'You can use XSO components with Vite, WebPack, Turbo, and more, only need to create a new JS file with the component code then just use it.'
        } },
        { p: {
            _: 'Is easy to use with HTML and raw JavaScript too, as the component is not compiled then is full compatible to be used directly.'
        } },
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