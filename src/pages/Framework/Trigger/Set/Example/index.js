import com from "@xso/com";
import trigger from "@xso/trigger";

const MY_TRIGGER_KEY = 'EXAMPLE_SET';

function MyComponent() {
    const myTriggerFunc = ()=> alert('Ding dong!');
    this.mount(() => {
        trigger.set(MY_TRIGGER_KEY, myTriggerFunc);
    });
    this.view(()=> [
        { button: {
            onClick: ()=> trigger(MY_TRIGGER_KEY),
            _: 'Rings the Bell'
        } }
    ]);
}

export default com(MyComponent);