import com from "@xso/com";

import Anchor from "../../../../components/Anchor";
import Title from "../../../../components/Title";
import Code from "../../../../components/Code";
import CodeTabs from "../../../../components/CodeTabs";

import Example from "./Example";

function Del() {
    this.view(() => [
        { [Anchor]: {
            name: 'get'
        } },
        { [Title]: {
            level: 3,
            content: 'Get'
        } },
        { p: {
            _: [
                'This method retrieves all arguments passed to the latest trigger of the identification key.'
            ]
        } },
        { p: {
            _: 'Here is an example using only one component to simplify:'
        } },
        { [CodeTabs]: {
            tabs: [
                { [CodeTabs.Tab]: {
                    label: 'Source',
                    active: true,
                    source: `
                        import com from "@xso/com";
                        import trigger from "@xso/trigger";

                        const MY_TRIGGER_KEY = 'EXAMPLE_GET';

                        function MyComponent() {
                            const myClient1 = (message)=> console.log('Client 1:', message);
                            const myClient2 = (message)=> console.log('Client 2:', message);
                            this.mount(()=> {
                                trigger.add(MY_TRIGGER_KEY, myClient1);
                                trigger.add(MY_TRIGGER_KEY, myClient2);
                                trigger(MY_TRIGGER_KEY, 'Hello world!');
                            });
                            this.view(()=> [
                                { button: {
                                    onClick: ()=> {
                                        trigger.get(MY_TRIGGER_KEY, (message) => {
                                            alert(
                                                \`The last message: \${message}\`+
                                                '\\n\\n' +
                                                'The messages received by clients are in the console log.'
                                            );
                                        });
                                    },
                                    _: 'Get The Latest Args'
                                } }
                            ]);
                        }

                        export default com(MyComponent);
                    `
                } }, // CodeTabs.Tab: Source
                { [CodeTabs.Tab]: {
                    label: 'Demo',
                    demo: { [Example]: { } }
                } }, // CodeTabs.Tab: Demo
            ]
        } }, // CodeTabs
        { p: {
            _: [
                `When you use the  `,
                { [Code]: {
                    _: 'get'
                } },
                ` method, the function will retrieve the latest arguments triggered to the key.`,
            ]
        } },
        { p: {
            _: [
                `The `,
                { [Code]: {
                    _: 'get'
                } },
                ` method is useful for rescuing the latest state of arguments stored.`,
            ]
        } },
    ]);
}

export default com(Del);