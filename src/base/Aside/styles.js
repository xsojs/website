import theme from "../../styles/theme";

const styles = {
    aside: {
        position: 'fixed',
        width: '300px',
        height: '100%',
        zIndex: 1,
        ...theme.aside,
        [theme.media.mobile]: {
            display: 'none',
        },
    },
    logo: {
        padding: '15px 0',
        textAlign: 'center',
        '> img': {
            height: '70px'
        }
    },
    navigation: {
        display: 'block',
        width: '100%',
        height: 'calc(100vh - 100px)',
        overflow: 'auto',
        '> ul': {
            listStyle: 'none',
            padding: 0,
            margin: 0,
            '> li': {
                marginTop: '10px',
                padding: '5px',
                '> a': {
                    display: 'block',
                    padding: '10px',
                    cursor: 'pointer',
                    fontSize: '24px',
                    fontFamily: 'Roboto Mono',
                    ...theme.aside.navigation.links.inactive,
                    '&:hover': {
                        ...theme.aside.navigation.links.inactive.over,
                    },
                    '.active': {
                        ...theme.aside.navigation.links.active
                    }
                }
            }
        }
    }
};

export default styles;