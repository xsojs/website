import com from "@xso/com";
import trigger from "@xso/trigger";

const MY_TRIGGER_KEY = 'EXAMPLE_GET';

function MyComponent() {
    const myTriggerFunc1 = ()=> alert('Ding...');
    const myTriggerFunc2 = ()=> alert('Dong!');
    this.mount(()=> {
        trigger.add(MY_TRIGGER_KEY, myTriggerFunc1);
        trigger.add(MY_TRIGGER_KEY, myTriggerFunc2);
    });
    this.view(()=> [
        { button: {
            onClick: ()=> {
                const triggers = trigger.get(MY_TRIGGER_KEY);
                console.log(
                    `Trigger: ${triggers.length} functions assigned to the key ${MY_TRIGGER_KEY}`, 
                    triggers
                );
                alert(
                    `Have ${triggers.length} functions assigned to the key ${MY_TRIGGER_KEY}.`+
                    `\nYou can see the functions in the console log.`
                );
            },
            _: 'Get Triggers'
        } }
    ]);
}

export default com(MyComponent);