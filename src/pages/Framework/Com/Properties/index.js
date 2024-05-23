import com from "@xso/com";

import Anchor from "../../../../components/Anchor";
import Title from "../../../../components/Title";
import CodeBlock from "../../../../components/CodeBlock";

function Properties() {
    this.view(() => [
        { [Anchor]: {
            name: 'properties'
        } },
        { [Title]: {
            level: 3,
            content: 'Properties'
        } },
        { p: {
            _: 'With properties you can pass data to your components.'
        } },
        { [CodeBlock]: {
            source: `
            import com from '@xso/com';

            function MyXSOComponent({ myProp }) {
                this.view(()=> [
                    { div: {
                        _: myProp,
                    } }
                ]);
            }

            export default com(MyXSOComponent);
            `
        }},
        { p: {
            _: 'Then in annother component you can pass your own value to your property, like:'
        } },
        { [CodeBlock]: {
            source: `
            import com from '@xso/com';

            import MyXSOComponent from './MyXSOComponent';

            function OtherXSOComponent() {
                this.view(()=> [
                    { [MyXSOComponent]: {
                        myProp: 'Hello! This content is using my own property...',
                    } }
                ]);
            }

            export default com(OtherXSOComponent);
            `
        }},
    ]);
}

export default com(Properties);