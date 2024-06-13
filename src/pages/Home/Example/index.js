import com from "@xso/com";
import css from "@xso/css";

import styles from "./styles";

function MyComponent({content}) {
    const counter = this.state(0);
    const refText = this.ref();
    this.changes([refText], () => {
        refText.current.style.border = '2px solid gray';
        refText.current.style.backgroundColor = 'gray';
    });
    this.view(() => [
        { div: {
            class: css(styles.container),
            _: [
                { p: {
                    _: `Counter: ${counter}`
                }},
                { button: {
                    onClick: ()=> { counter.$val++; },
                    _: '+ Add'
                } },
                ' ',
                { button: {
                    onClick: ()=> { counter.$val--; },
                    _: '- Minus'
                } },
                refText.set({ div: {
                    _: content
                } })
            ]
        } }
    ]);
}

export default com(MyComponent);