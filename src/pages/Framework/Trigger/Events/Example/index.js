import com from "@xso/com";
import trigger from "@xso/trigger";

const MY_TRIGGER_KEY = 'EXAMPLE_EVENT';

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
                const triggers = trigger.events(MY_TRIGGER_KEY);
                console.log(
                    `Trigger: ${triggers.length} events assigned to the key ${MY_TRIGGER_KEY}`, 
                    triggers
                );
                alert(
                    `Have ${triggers.length} events assigned to the key ${MY_TRIGGER_KEY}.`+
                    `\nYou can see the functions events in the console log.`
                );
            },
            _: 'Trigger Events'
        } }
    ]);
}

export default com(MyComponent);