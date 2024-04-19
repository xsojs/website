import com from "@xso/com";

const Menu = com(function ({_}) {
    this.view(()=> [
        { ul: {
            _
        } }
    ]);
});

Menu.Item = com(function ({subMenu, _}) {
    com.ensureType.optional(subMenu, Menu.SubMenu);
    const refSubMenu = this.ref();
    this.view(()=> {
        if (subMenu) {
            return [
                { li: {
                    onClick: ()=> refSubMenu.current.onToggle(),
                    _
                } },
                refSubMenu.set(subMenu)
            ];
        }
        return [
            { li: {
                _
            } }
        ];
    });
});

Menu.SubMenu = com(function ({active, _}) {
    const visible = this.state(active);
    this.onToggle = () => {
        visible.$val = !visible.val;
    }
    this.view(()=> {
        if (visible.val) {
            return [
                { ul: {
                    _
                } }
            ];
        }
    });
});

export default Menu;