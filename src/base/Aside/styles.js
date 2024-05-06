import theme from "../../styles/theme";

const ul = {
    listStyle: 'none',
    padding: 0,
    margin: 0,
};

const link = {
    display: 'block',
    cursor: 'pointer',
    fontFamily: 'Roboto Mono',
    textDecoration: 'none',
    ...theme.aside.navigation.links.inactive,
    '&:hover': {
        ...theme.aside.navigation.links.inactive.over,
    },
    '.active': {
        ...theme.aside.navigation.links.active
    }
};

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
            ...ul,
            '> li': {
                marginTop: '10px',
                padding: '5px',
                '> a': {
                    ...link,
                    padding: '10px',
                    fontSize: '24px',
                },
                '> ul': {
                    ...ul,
                    '> li': {
                        marginTop: '10px',
                        '&:first-child': {
                            marginTop: '-10px'
                        },
                        padding: '5px 20px',
                        '> a': {
                            ...link,
                            padding: '5px 10px',
                            fontSize: '18px',
                        },
                        '> ul': {
                            ...ul,
                            '> li': {
                                marginTop: '5px',
                                '&:first-child': {
                                    marginTop: '-10px'
                                },
                                padding: '5px 10px 5px 20px',
                                '> a': {
                                    ...link,
                                    padding: '5px 10px',
                                    fontSize: '18px',
                                },
                            }
                        }
                    }
                }
            }
        }
    }
};

export default styles;