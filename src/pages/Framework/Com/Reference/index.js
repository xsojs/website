import com from "@xso/com";

import Anchor from "../../../../components/Anchor";
import Title from "../../../../components/Title";
import Code from "../../../../components/Code";
import CodeBlock from "../../../../components/CodeBlock";

function Reference() {
    this.view(() => [
        { [Anchor]: {
            name: 'reference'
        } },
        { [Title]: {
            level: 3,
            content: 'Reference'
        } },
        { p: {
            _: 'In some cases we need to access the DOM element directly, or even call an inner function inside another component.'
        } },
        { p: {
            _: [
                'For these needs we have the reference, more know as ',
                { [Code]: {
                    _: 'ref'
                } },
                '.'
            ]
        } },
        { p: {
            _: [
                'In this code below you can see how to apply some style using ',
                { [Code]: {
                    _: 'ref'
                } },
                ':'
            ]
        } },
        { [CodeBlock]: {
            source: `
            import com from '@xso/com';

            function MyXSOComponent() {
                const myRef = this.ref();
                this.changes([myRef], ()=> {
                    myRef.current.style.background = 'yellow';
                    myRef.current.style.borderStyle = '2px solid red';
                });
                this.view(()=> [
                    myRef.set({ div: {
                        _: \`Styling this DOM element with reference.\`,
                    } })
                ]);
            }

            export default com(MyXSOComponent);
            `
        }},
        { p: {
            _: [
                'Here how you can access a function inside the child component using ',
                { [Code]: {
                    _: 'ref'
                } },
                ':'
            ]
        } },
        { [CodeBlock]: {
            source: `
            import com from '@xso/com';

            const MyChildComponent = com(function () {
                const myState = this.state(0);
                this._myChildMethod = (v)=> {
                    myState.$val = v;
                }
                this.view(()=> [
                    { p: {
                        _: \`My state value: \${myState.val}.\`
                    } }
                ]);
            });

            function MyRootComponent() {
                const rootState = this.state(0);
                const myRef = this.ref();
                this.view(()=> [
                    { button: {
                        onClick: ()=> {
                            rootState.val++;
                            myRef.current._myChildMethod(rootState.val);
                        },
                        _: \`Increment\`,
                    } },
                    myRef.set({ [MyChildComponent]: {} })
                ]);
            }

            export default com(MyRootComponent);
            `
        }},
        { p: {
            _: [
                'To not override the framework methods you should use a prefix, like this example above is using the ',
                { [Code]: {
                    _: '_'
                } },
                ' as prefix in the custom method.'
            ]
        } },
    ]);
}

export default com(Reference);