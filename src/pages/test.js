import React from 'react';
import { SEO } from '../Components/seo';

const test = () => {
    return (
        <div>
            <h1>this is test page</h1>
            <h1>this is test page</h1>
            <h1>this is test page</h1>
            <h1>this is test page</h1>
            <h1>this is test page</h1>
        </div>
    );
};

export default test;
export const Head = () => <SEO title="test blog" />;