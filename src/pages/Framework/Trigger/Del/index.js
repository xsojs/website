import com from "@xso/com";

import Anchor from "../../../../components/Anchor";
import Title from "../../../../components/Title";
import Code from "../../../../components/Code";
import CodeTabs from "../../../../components/CodeTabs";

import Example from "./Example";

function Del() {
    this.view(() => [
        { [Anchor]: {
            name: 'del'
        } },
        { [Title]: {
            level: 3,
            content: 'Del'
        } },
        { p: {
            _: [
                'This method will remove the function assigned to the identification key.'
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

                        const MY_TRIGGER_KEY = 'EXAMPLE_DEL';

                        function MyComponent() {
                            const myTriggerFunc1 = ()=> alert('Ding...');
                            const myTriggerFunc2 = ()=> alert('Dong!');
                            this.view(()=> [
                                { p: {
                                    _: [
                                        { button: {
                                            onClick: ()=> trigger.add(MY_TRIGGER_KEY, myTriggerFunc1),
                                            _: 'Add Trigger 1'
                                        } },
                                        ' ',
                                        { button: {
                                            onClick: ()=> trigger.del(MY_TRIGGER_KEY, myTriggerFunc1),
                                            _: 'Remove Trigger 1'
                                        } },
                                    ]
                                } },
                                { p: {
                                    _: [
                                        { button: {
                                            onClick: ()=> trigger.add(MY_TRIGGER_KEY, myTriggerFunc2),
                                            _: 'Add Trigger 2'
                                        } },
                                        ' ',
                                        { button: {
                                            onClick: ()=> trigger.del(MY_TRIGGER_KEY, myTriggerFunc2),
                                            _: 'Remove Trigger 2'
                                        } },
                                    ]
                                } },
                                { button: {
                                    onClick: ()=> {
                                        if (trigger.get(MY_TRIGGER_KEY).length == 0) {
                                            alert('Trigger without functions to be fired!')
                                        }
                                        trigger(MY_TRIGGER_KEY);
                                    },
                                    _: 'Call the Trigger'
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
                    _: 'del'
                } },
                ` method, the function passed is removed from the key.`,
            ]
        } },
        { p: {
            _: [
                `The `,
                { [Code]: {
                    _: 'del'
                } },
                ` method is useful for cleanup functions that are not necessary anymore.`,
            ]
        } },
    ]);
}

export default com(Del);