import com from "@xso/com";
import trigger from "@xso/trigger";

const MY_TRIGGER_KEY = 'EXAMPLE_GET';

function MyComponent() {
    const myClient1 = (message)=> console.log('Client 1:', message);
    const myClient2 = (message)=> console.log('Client 2:', message);
    this.mount(()=> {
        trigger.add(MY_TRIGGER_KEY, myClient1);
        trigger.add(MY_TRIGGER_KEY, myClient2);
        trigger(MY_TRIGGER_KEY, 'Hello world!');
    });
    this.view(()=> [
        { button: {
            onClick: ()=> {
                trigger.get(MY_TRIGGER_KEY, (message) => {
                    alert(
                        `The last message: ${message}`+
                        '\n\n' +
                        'The messages received by clients are in the console log.'
                    );
                });
            },
            _: 'Get The Latest Args'
        } }
    ]);
}

export default com(MyComponent);