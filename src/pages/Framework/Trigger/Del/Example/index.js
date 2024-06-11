import com from "@xso/com";
import trigger from "@xso/trigger";

const MY_TRIGGER_KEY = 'EXAMPLE_DEL';

function MyComponent() {
    const myTriggerFunc1 = ()=> alert('Ding...');
    const myTriggerFunc2 = ()=> alert('Dong!');
    this.view(()=> [
        { p: {
            _: [
                { button: {
                    onClick: ()=> trigger.add(MY_TRIGGER_KEY, myTriggerFunc1),
                    _: 'Add Trigger 1'
                } },
                ' ',
                { button: {
                    onClick: ()=> trigger.del(MY_TRIGGER_KEY, myTriggerFunc1),
                    _: 'Remove Trigger 1'
                } },
            ]
        } },
        { p: {
            _: [
                { button: {
                    onClick: ()=> trigger.add(MY_TRIGGER_KEY, myTriggerFunc2),
                    _: 'Add Trigger 2'
                } },
                ' ',
                { button: {
                    onClick: ()=> trigger.del(MY_TRIGGER_KEY, myTriggerFunc2),
                    _: 'Remove Trigger 2'
                } },
            ]
        } },
        { button: {
            onClick: ()=> {
                if (trigger.get(MY_TRIGGER_KEY).length == 0) {
                    alert('Trigger without functions to be fired!')
                }
                trigger(MY_TRIGGER_KEY);
            },
            _: 'Call the Trigger'
        } }
    ]);
}

export default com(MyComponent);