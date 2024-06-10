import com from "@xso/com";

import Anchor from "../../../../components/Anchor";
import Title from "../../../../components/Title";
import Code from "../../../../components/Code";
import CodeBlock from "../../../../components/CodeBlock";

function Mount() {
    this.view(() => [
        { [Anchor]: {
            name: 'mount'
        } },
        { [Title]: {
            level: 3,
            content: 'Mount'
        } },
        { p: {
            _: 'It is an event to perform a function when the component is ready, it means when the render is finished.'
        } },
        { p: {
            _: 'Useful to register a trigger when the component starts.'
        } },
        { p: {
            _: [
                'Here a simple example of how to use the ',
                { [Code]: {
                    _: 'mount'
                } },
                ' event method:',
            ]
        } },
        { [CodeBlock]: {
            source: `
            import com from '@xso/com';

            function MyXSOComponent() {
                this.mount(() => alert('My component is ready!'));
                this.view(()=> [
                    { div: {
                        _: 'My XSO Component with Mount event.',
                    } }
                ]);
            }

            export default com(MyXSOComponent);
            `
        }},
        { p: {
            _: [
                'Using the ',
                { [Code]: {
                    _: 'mount'
                } },
                ' method you can pass your function to be called when the component is fully initialized.'
            ]
        } },
    ]);
}

export default com(Mount);