import com from "@xso/com";

import Anchor from "../../../../components/Anchor";
import Title from "../../../../components/Title";
import Code from "../../../../components/Code";
import CodeBlock from "../../../../components/CodeBlock";

function Changes() {
    this.view(() => [
        { [Anchor]: {
            name: 'changes'
        } },
        { [Title]: {
            level: 3,
            content: 'Changes'
        } },
        { p: {
            _: 'To detect when a property, state or reference were changed, we have the listener or observer method called changes.'
        } },
        { [CodeBlock]: {
            source: `
            import com from '@xso/com';

            function MyXSOComponent() {
                const myState = this.state(0)
                this.view(()=> [
                    { button: {
                        onClick: ()=> myState.$val++,
                        _: \`Click Me (\${myState.val})\`,
                    } }
                ]);
            }

            export default com(MyXSOComponent);
            `
        }},
        { p: {
            _: 'If you set a new value using the $ will trigger the component render, then a new render of the entire component will be performed.'
        } },
        { p: {
            _: 'But you can change the state silent, without trigger the component render, just remove the $ like that:'
        } },
        { [CodeBlock]: {
            source: `
            import com from '@xso/com';

            const MyChildComponent = com(function ({ myProp }) {
                const myState = this.state(0);
                this.changes([myProp, myState], () => {
                    console.log(
                        'My prop and state changed.',
                        { myProp, myState.val }
                    );
                });
                this.changes([myProp], () => {
                    console.log('My Prop changed.', myProp);
                });
                this.changes([myState], () => {
                    console.log('State changed.', myState.val);
                });
                this.view(()=> [
                    { p: {
                        _: \`My prop: \${myProp}.\`
                    } },
                    { button: {
                        onClick: ()=> myState.val++,
                        _: \`Click Me (\${myState.val})\`,
                    } }
                ]);
            });

            function MyRootComponent() {
                const rootState = this.state(0);
                this.view(()=> [
                    { button: {
                        onClick: ()=> rootState.val++,
                        _: \`Prop Increment\`,
                    } },
                    { [MyChildComponent]: {
                        myProp: rootState.val
                    } }
                ]);
            }

            export default com(MyRootComponent);
            `
        }},
    ]);
}

export default com(Changes);