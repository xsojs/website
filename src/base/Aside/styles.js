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
            height: '100px',
            overflow: 'hidden'
        },
    },
    asideOpen: {
        [theme.media.mobile]: {
            height: '100%',
            overflow: 'visible'
        },
    },
    top: {
        padding: '15px 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        '> img': {
            height: '70px'
        }
    },
    menu: {
        display: {
            default: 'none',
            [theme.media.mobile]: 'block'
        },
        ...theme.svgLink,
        '> span > img': {
            height: '70px',
        },
        '> span > svg': {
            height: '70px',
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