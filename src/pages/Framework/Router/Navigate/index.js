import com from "@xso/com";

import Anchor from "../../../../components/Anchor";
import Title from "../../../../components/Title";
import Code from "../../../../components/Code";
import CodeBlock from "../../../../components/CodeBlock";

function Navigate() {
    this.view(() => [
        { [Anchor]: {
            name: 'navigate'
        } },
        { [Title]: {
            level: 3,
            content: 'Navigate'
        } },
        { p: {
            _: 'A component that generates a link used to change the URL and the router will navigate to the related content.'
        } },
        { p: {
            _: 'Then to easily create links to navigate to a certain content, this component is very useful.'
        } },
        { [CodeBlock]: {
            source: `
                import com from "@xso/com";
                import { Navigate } from "@xso/router";

                function Link() {
                    this.view(()=> [
                        { [Navigate]: {
                            to: '/my/page',
                            onClick: () => alert('Going to My Page...'),
                            _: 'To My Page'
                        } }
                    ]);
                }

                export default com(Link);
            `
        }}, // CodeBlock
        { p: {
            _: [
                `Using the  `,
                { [Code]: {
                    _: 'Navigate'
                } },
                ` component, you can create links to change to another content.`,
            ]
        } },
        { p: {
            _: [
                `Whit the `,
                { [Code]: {
                    _: 'onClick'
                } },
                ` event, you can append a custom behavior.`,
            ]
        } },
    ]);
}

export default com(Navigate);