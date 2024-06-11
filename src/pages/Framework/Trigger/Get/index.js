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
                'This method gives all the functions assigned to the identification key.'
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
                            const myTriggerFunc1 = ()=> alert('Ding...');
                            const myTriggerFunc2 = ()=> alert('Dong!');
                            this.mount(()=> {
                                trigger.add(MY_TRIGGER_KEY, myTriggerFunc1);
                                trigger.add(MY_TRIGGER_KEY, myTriggerFunc2);
                            });
                            this.view(()=> [
                                { button: {
                                    onClick: ()=> {
                                        const triggers = trigger.get(MY_TRIGGER_KEY);
                                        console.log(
                                            \`Trigger: \${triggers.length} functions assigned to the key \${MY_TRIGGER_KEY}\`, 
                                            triggers
                                        );
                                        alert(
                                            \`Have \${triggers.length} functions assigned to the key \${MY_TRIGGER_KEY}.\`+
                                            \`\nYou can see the functions in the console log.\`
                                        );
                                    },
                                    _: 'Get Triggers'
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
                ` method, an array with all the functions assigned to the key is returned.`,
            ]
        } },
        { p: {
            _: [
                `The `,
                { [Code]: {
                    _: 'get'
                } },
                ` method is useful to verify if have any function assigned to the key.`,
            ]
        } },
    ]);
}

export default com(Del);