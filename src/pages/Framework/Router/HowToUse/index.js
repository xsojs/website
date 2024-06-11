import com from "@xso/com";

import Anchor from "../../../../components/Anchor";
import Title from "../../../../components/Title";
import Code from "../../../../components/Code";
import CodeBlock from "../../../../components/CodeBlock";

function HowToUse() {
    this.view(() => [
        { [Anchor]: {
            name: 'how-to-use'
        } },
        { [Title]: {
            level: 3,
            content: 'How To Use'
        } },
        { p: {
            _: 'To create the navigation between contents using a router, to manage the related component with the URL link, here is an example:'
        } },
        { [CodeBlock]: {
            source: `
                import com from "@xso/com";
                import { Router, Route } from "@xso/router";

                function Main() {
                    this.view(()=> [
                        { main: {
                            _: [
                                { [Router]: {
                                    routes: [
                                        { [Route]: {
                                            path: '/',
                                            component: Home
                                        } },
                                        { [Route]: {
                                            path: '/product/{uid}/{name}',
                                            component: Product
                                        } }
                                    ]
                                } } // Router
                            ]
                        } } // Main
                    ]);
                }

                export default com(Main);
            `
        }}, // CodeBlock
        { p: {
            _: [
                `Between open and close braces in the path, like `,
                { [Code]: {
                    _: '/{param1}'
                } },
                `, you can define parameters.`,
            ]
        } },
        { [Title]: {
            level: 5,
            content: 'Component Parameters'
        } },
        { p: {
            _: 'How you can get the route parameters in your content component, here is an example:'
        } },
        { [CodeBlock]: {
            source: `
            import com from "@xso/com";
            import css from "@xso/css";
            import { navigateTo } from "@xso/router";

            function Product({route}) {
                this.view(() => [
                    { h3: {
                        _: \`Router Parameters\`
                    } },
                    { p: {
                        _: \`UID: \${route.params.uid}\`
                    } },
                    { p: {
                        _: \`Name: \${route.params.name}\`
                    } }
                ]);
            }

            export default com(Product);
            `
        }},
    ]);
}

export default com(HowToUse);