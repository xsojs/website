import com from "@xso/com";
import css from "@xso/css";

import styles from "./styles";
import CodeBlock from "../CodeBlock";

const CodeTabs = com(function ({tabs}) {
    com.ensureType(tabs, CodeTabs.Tab);
    const refs = {buttons: [], tabs: []};
    tabs.forEach(() => {
        refs.buttons.push(this.ref());
        refs.tabs.push(this.ref());
    });
    this.view(()=> {
        const view = {buttons: [], tabs: []};
        for (const [index, tab] of tabs.entries()) {
            view.buttons.push(refs.buttons[index].set({
                button: {
                    class: css(styles.button) + (com.props(tab).active ? ' active' : ''),
                    onClick: ()=> {
                        refs.buttons.forEach((r)=> r.current.classList.remove('active'));
                        refs.buttons[index].current.classList.add('active');
                        refs.tabs.forEach((r)=> r.current.onHide()); 
                        refs.tabs[index].current.onShow();
                    },
                    _: com.props(tab).label
                }
            }));
            view.tabs.push(refs.tabs[index].set(tab));
        }
        return [
            { div: {
                class: css(styles.codeTabs),
                _: [
                    ...view.buttons,
                    ...view.tabs
                ]
            } }
        ];
    });
})

CodeTabs.Tab = com(function ({source, active = false}) {
    const visible = this.state(active);
    this.onShow = () => {
        visible.$val = true;
    };
    this.onHide = () => {
        visible.$val = false;
    }
    this.view(() => {
        if (visible.val) {
            return [
                { [CodeBlock]: {
                    source
                } }
            ]
        }
        return [];
    });
})

export default CodeTabs;