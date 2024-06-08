import com from "@xso/com";

import SVGInject from "@iconfu/svg-inject";

function SVG(props) {
    const showing = this.state(true);
    const ref = this.ref();
    this._hide = ()=> showing.$val = false;
    this._show = ()=> showing.$val = true;
    this.view(() => {
        if (showing.val) {
            return { span: {
                _: ref.set({ img: {
                    ...props,
                    onLoad: ()=> SVGInject(ref.current)
                } })
            } };
        } else {
            return null;
        }
    });
}

export default com(SVG);