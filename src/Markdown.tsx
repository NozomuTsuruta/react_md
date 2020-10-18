import React, { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import { CodeBlock } from './CodeBlock';

interface IProps {
    value?: string;
}

export const Markdown:FC<IProps> = ({ value }) => {
    return (
        <div style={{ width: '50%' }}>
            Preview
            <ReactMarkdown
                renderers={{ code: CodeBlock }}
                plugins={[gfm]}
                children={value}
            />
        </div>
    );
};
