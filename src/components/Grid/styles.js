const styles = {
    row: (cols) => {
        return {
            display: 'grid',
            gridTemplateColumns: cols.map(() => '1fr').join(' '),
            gap: '10px',
        };
    },
    col: ({align}) => {
        return {
            textAlign: align
        }
    }
};

export default styles;
