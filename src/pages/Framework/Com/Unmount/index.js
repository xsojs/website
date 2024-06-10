import com from "@xso/com";

import Anchor from "../../../../components/Anchor";
import Title from "../../../../components/Title";
import Code from "../../../../components/Code";
import CodeBlock from "../../../../components/CodeBlock";

function Unmount() {
    this.view(() => [
        { [Anchor]: {
            name: 'unmount'
        } },
        { [Title]: {
            level: 3,
            content: 'Unmount'
        } },
        { p: {
            _: 'It is an event to perform a function when the component is gone, it means when is removed from the page.'
        } },
        { p: {
            _: 'Useful to unregister a trigger when the component ends.'
        } },
        { p: {
            _: [
                'Here a simple example of how to use the ',
                { [Code]: {
                    _: 'unmount'
                } },
                ' event method:',
            ]
        } },
        { [CodeBlock]: {
            source: `
            import com from '@xso/com';

            function MyXSOComponent() {
                this.unmount(() => alert('My component is gone!'));
                this.view(()=> [
                    { div: {
                        _: 'My XSO Component with Unmount event.',
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
                    _: 'unmount'
                } },
                ' method you can pass your function to be called when the component is fully destroyed.'
            ]
        } },
    ]);
}

export default com(Unmount);