import com from "@xso/com";

import Anchor from "../../../../components/Anchor";
import Title from "../../../../components/Title";
import Code from "../../../../components/Code";
import CodeTabs from "../../../../components/CodeTabs";

import Example from "./Example";

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
            _: 'To create the global events between contents using a trigger, here is an example:'
        } },
        { [CodeTabs]: {
            tabs: [
                { [CodeTabs.Tab]: {
                    label: 'Source',
                    active: true,
                    source: `
                        import com from "@xso/com";
                        import trigger from "@xso/trigger";
        
                        const SERVER_MESSAGE_KEY = 'SERVER_MESSAGE';
        
                        const Server = com(function() {
                            const refMessage = this.ref();
                            const onMessage = (message)=> {
                                refMessage.current.innerText = message;
                            };
                            this.mount(() => {
                                trigger.add(SERVER_MESSAGE_KEY, onMessage);
                            });
                            this.unmount(() => {
                                trigger.del(SERVER_MESSAGE_KEY, onMessage);
                            });
                            this.view(()=> [
                                { p: {
                                    _: [
                                        'Message received: ',
                                        refMessage.set({ span: {
                                            _: 'Nothing yet...'
                                        } })
                                    ]
                                } }
                            ]);
                        });
        
                        const Client1 = com(function() {
                            this.view(()=> [
                                { button: {
                                    onClick: ()=> trigger(
                                        SERVER_MESSAGE_KEY,
                                        'From Client 1!'
                                    ),
                                    _: 'Client 1: Send'
                                } }
                            ]);
                        });
        
                        const Client2 = com(function() {
                            this.view(()=> [
                                { button: {
                                    onClick: ()=> trigger(
                                        SERVER_MESSAGE_KEY,
                                        'From Client 2!'
                                    ),
                                    _: 'Client 2: Send'
                                } }
                            ]);
                        });
        
                        function Main() {
                            this.view(()=> [
                                { div: {
                                    _: [
                                        { [Server]: { } },
                                        { p: {
                                            _: [
                                                { [Client1]: { } },
                                                ' ',
                                                { [Client2]: { } },
                                            ]
                                        } },
                                    ]
                                } }
                            ]);
                        }
        
                        export default com(Main);
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
                `Remember that: The code above can be split into as many source files as you want.`,
            ]
        } },
        { p: {
            _: [
                `The `,
                { [Code]: {
                    _: 'trigger'
                } },
                ` works independently of the source code structure.`,
            ]
        } },
    ]);
}

export default com(HowToUse);