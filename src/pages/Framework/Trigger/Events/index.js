import com from "@xso/com";

import Anchor from "../../../../components/Anchor";
import Title from "../../../../components/Title";
import Code from "../../../../components/Code";
import CodeTabs from "../../../../components/CodeTabs";

import Example from "./Example";

function Del() {
    this.view(() => [
        { [Anchor]: {
            name: 'events'
        } },
        { [Title]: {
            level: 3,
            content: 'Events'
        } },
        { p: {
            _: [
                'This method gives all the functions assigned as events to the identification key.'
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

                        const MY_TRIGGER_KEY = 'EXAMPLE_EVENT';

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
                                        const triggers = trigger.events(MY_TRIGGER_KEY);
                                        console.log(
                                            \`Trigger: \${triggers.length} events assigned to the key \${MY_TRIGGER_KEY}\`, 
                                            triggers
                                        );
                                        alert(
                                            \`Have \${triggers.length} events assigned to the key \${MY_TRIGGER_KEY}.\`+
                                            \`\\nYou can see the functions events in the console log.\`
                                        );
                                    },
                                    _: 'Trigger Events'
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
                ` method, an array with all the functions events assigned to the key is returned.`,
            ]
        } },
        { p: {
            _: [
                `The `,
                { [Code]: {
                    _: 'get'
                } },
                ` method is useful to verify if have any function event assigned to the key.`,
            ]
        } },
    ]);
}

export default com(Del);