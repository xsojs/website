import theme from "../../styles/theme";

const styles = {
    codeDemo: {
        ...theme.blockSpace,
        padding: '20px',
        fontFamily: 'Roboto Mono',
        overflow: 'auto',
        ...theme.codeBlock,
        ' button': {
            color: 'black'
        }
    }
};

export default styles;