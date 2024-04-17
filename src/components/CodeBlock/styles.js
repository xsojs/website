import theme from "../../styles/theme";

const styles = {
    codeBlock: {
        ...theme.blockSpace,
        padding: '20px',
        fontFamily: 'Roboto Mono',
        overflow: 'auto',
        ...theme.codeBlock,
        '> *': {
            fontFamily: 'Roboto Mono',
        }
    }
};

export default styles;