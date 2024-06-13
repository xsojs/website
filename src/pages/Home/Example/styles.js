import theme from "../../../styles/theme";

const styles = {
    container: {
        '> button': {
            color: 'white',
            padding: '10px',
            borderRadius: '20px',
            border: 'none',
            backgroundColor: 'gray',
            ':hover': {
                backgroundColor: 'black',
                cursor: 'pointer',
            }
        },
        '> div': {
            ...theme.blockSpace,
            padding: '20px',
            borderRadius: '20px',
            boxShadow: '0 0 10px black',
            ...theme.text
        }
    }
};

export default styles;