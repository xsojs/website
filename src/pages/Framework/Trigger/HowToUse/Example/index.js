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