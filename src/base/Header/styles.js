import theme from "../../styles/theme";
import vars from "../../styles/vars";

const styles = {
    header: {
        position: 'fixed',
        top: 0,
        right: 0,
        [theme.media.desktop]: {
            left: `${vars.aside.width}px`,
        },
        [theme.media.mobile]: {
            left: 0,
        },
        height: '100px',
    },
    links: {
        textAlign: 'right',
        marginTop: '10px',
        '> a': {
            color: 'white',
            '> img': {
                height: '40px',
                fill: 'white'
            }
        }
    }
};

export default styles;