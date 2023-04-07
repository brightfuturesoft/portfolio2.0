import React from 'react';
import {Helmet} from "react-helmet";

const Title = ({title}) => {
    return (
        <Helmet>
            <title>Bright Future | {title}</title>
        </Helmet>
    );
};

export default Title;