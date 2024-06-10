import com from "@xso/com";

import Anchor from "../../../../components/Anchor";
import Title from "../../../../components/Title";
import Code from "../../../../components/Code";
import CodeBlock from "../../../../components/CodeBlock";

function NavigateTo() {
    this.view(() => [
        { [Anchor]: {
            name: 'navigateTo'
        } },
        { [Title]: {
            level: 3,
            content: 'Navigate To'
        } },
        { p: {
            _: [
                'It\'s a function used to change the link in the URL and the router will navigate to the related content.',
            ]
        } },
        { p: {
            _: [
                `Using the function `,
                { [Code]: {
                    _: 'navigateTo'
                } },
                `, you can easily change the content programmatically.`,
            ]
        } },
        { p: {
            _: 'Here an example:'
        } },
        { [CodeBlock]: {
            source: `
                import com from "@xso/com";
                import { navigateTo } from "@xso/router";

                function Main() {
                    const counter = this.state(0);
                    this.changes([counter], () => {
                        navigateTo(\`/product/\${counter.val}\`);
                    });
                    this.view(()=> [
                        { a: {
                            onClick: ()=> navigateTo('/'),
                            _: 'Link to Home'
                        } },
                        { button: {
                            onClick: ()=> counter.$val++,
                            _: \`Click me! \${counter.val}\`,
                        } }
                    ]);
                }

                export default com(Main);
            `
        }}, // CodeBlock
    ]);
}

export default com(NavigateTo);