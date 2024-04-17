import theme from "../../styles/theme";
import vars from "../../styles/vars";

const styles = {
    footer: {
        [theme.media.desktop]: {
            marginLeft: `${vars.aside.width}px`,
            width: `calc(100% - ${vars.aside.width}px)`,
        },
        [theme.media.mobile]: {
            width: '100%',
        },
        padding: '40px 0'
    }
};

export default styles;