import com from "@xso/com";

import Anchor from "../../../../components/Anchor";
import Title from "../../../../components/Title";
import Code from "../../../../components/Code";
import CodeTabs from "../../../../components/CodeTabs";

import Example from "./Example";

function Set() {
    this.view(() => [
        { [Anchor]: {
            name: 'set'
        } },
        { [Title]: {
            level: 3,
            content: 'Set'
        } },
        { p: {
            _: [
                'This method will set the identification key with only the function passed.'
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

                        const MY_TRIGGER_KEY = 'EXAMPLE_SET';

                        function MyComponent() {
                            const myTriggerFunc = ()=> alert('Ding dong!');
                            this.mount(() => {
                                trigger.set(MY_TRIGGER_KEY, myTriggerFunc);
                            });
                            this.view(()=> [
                                { button: {
                                    onClick: ()=> trigger(MY_TRIGGER_KEY),
                                    _: 'Rings the Bell'
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
                    _: 'set'
                } },
                ` method, only one function is assingned to the key.`,
            ]
        } },
        { p: {
            _: [
                `If the key has other functions, then all functions will be deleted to only use the function passed to the `,
                { [Code]: {
                    _: 'set'
                } },
                ` method.`,
            ]
        } },
    ]);
}

export default com(Set);