
import theme from "../../styles/theme";

const styles = {
    codeTabs: {
        ...theme.blockSpace,
    },
    code: {
        background: '#d1d1d1',
        fontFamily: '"Roboto Mono"',
        padding: '0 10px',
        borderRadius: '5px'
    },
    button: {
        ...theme.codeTabs.buttons.inactive,
        cursor: 'pointer',
        fontFamily: 'Roboto Mono',
        padding: '5px 10px',
        marginRight: '10px',
        background: 'none',
        '.active': {
            ...theme.codeTabs.buttons.active
        },
    }
};

export default styles;
