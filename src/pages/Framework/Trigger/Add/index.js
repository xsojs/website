import com from "@xso/com";

import Anchor from "../../../../components/Anchor";
import Title from "../../../../components/Title";
import Code from "../../../../components/Code";
import CodeTabs from "../../../../components/CodeTabs";

import Example from "./Example";

function Add() {
    this.view(() => [
        { [Anchor]: {
            name: 'add'
        } },
        { [Title]: {
            level: 3,
            content: 'Add'
        } },
        { p: {
            _: [
                'This method will add to the identification key the function passed, many functions can be added and all will be called at once.'
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

                        const MY_TRIGGER_KEY = 'EXAMPLE_ADD';

                        function MyComponent() {
                            this.mount(() => {
                                trigger.add(MY_TRIGGER_KEY, ()=> alert('Ding...'));
                                trigger.add(MY_TRIGGER_KEY, ()=> alert('Dong!'));
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
                    _: 'add'
                } },
                ` method, your function is attached to the key.`,
            ]
        } },
        { p: {
            _: [
                `Trigger will fire all functions attached to the `,
                { [Code]: {
                    _: 'add'
                } },
                ` method.`,
            ]
        } },
    ]);
}

export default com(Add);