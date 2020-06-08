import React from 'react';
import Box from '@material-ui/core/Box';

import './index.scss';

const PageHead = props => {
    const { title, imagePatch} = props;

    return (
        <Box component="div" className="page-head" mb={4}>
            <img src={imagePatch} alt={title} />
            <h2>{title}</h2>
        </Box>
    );
};

export default PageHead;
