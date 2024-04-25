import theme from "../../styles/theme";
import vars from "../../styles/vars";

const styles = {
    main: {
        ...theme.page,
        minHeight: 'calc(100vh - 285px)',
        [theme.media.desktop]: {
            marginLeft: `${vars.aside.width}px`,
            width: `calc(100% - ${vars.aside.width}px)`,
        },
        [theme.media.mobile]: {
            width: '100%',
        },
        paddingTop: '100px'
    }
};

export default styles;