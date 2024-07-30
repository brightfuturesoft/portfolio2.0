import React from 'react';
import { Helmet } from "react-helmet";

const Title = ({ title }) => {
    return (
        <Helmet>
            <title>Bright Future Soft | {title}</title>
            <meta></meta>
        </Helmet>
    );
};

export default Title;



export const base_url = `http://localhost:5010/api/v1`