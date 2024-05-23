import com from "@xso/com";

import Anchor from "../../../../components/Anchor";
import Title from "../../../../components/Title";
import Code from "../../../../components/Code";
import CodeBlock from "../../../../components/CodeBlock";

function State() {
    this.view(() => [
        { [Anchor]: {
            name: 'state'
        } },
        { [Title]: {
            level: 3,
            content: 'State'
        } },
        { p: {
            _: 'With states, you can store data and update your component by performing a new render.'
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
            _: [
                'If you set a new value using the ',
                { [Code]: {
                    _: '$'
                } },
                ' will trigger the component render, then a new render of the entire component will be performed.'
            ]
        } },
        { p: {
            _: [
                'But you can change the state silent, without trigger the component render, just remove the ',
                { [Code]: {
                    _: '$'
                } },
                ' like that:'
            ]
        } },
        { [CodeBlock]: {
            source: `
            import com from '@xso/com';

            function MyXSOComponent() {
                const myState = this.state(0)
                this.view(()=> [
                    { button: {
                        onClick: ()=> myState.val++,
                        _: \`Click Me (\${myState.val})\`,
                    } },
                    { span: {
                        _: ' &nbsp; '
                    } },
                    { button: {
                        onClick: ()=> this.render(),
                        _: \`Update\`,
                    } }
                ]);
            }

            export default com(MyXSOComponent);
            `
        }},
    ]);
}

export default com(State);