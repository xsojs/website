import com from "@xso/com";
import trigger from "@xso/trigger";

const MY_TRIGGER_KEY = 'EXAMPLE_ADD';

function MyComponent() {
    this.mount(() => {
        trigger.add(MY_TRIGGER_KEY, ()=> alert('Ding...'));
        trigger.add(MY_TRIGGER_KEY, ()=> alert('Dong!'));
    });
    this.view(()=> [
        { button: {
            onClick: ()=> trigger(MY_TRIGGER_KEY),
            _: 'Rings the Bell'
        } }
    ]);
}

export default com(MyComponent);