import React, { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import { Container } from './App';
import { CodeBlock } from './CodeBlock';

interface IProps {
    value?: string;
}

export const Markdown:FC<IProps> = ({ value }) => {
    return (
        <Container>
            Preview
            <ReactMarkdown
                renderers={{ code: CodeBlock }}
                plugins={[gfm]}
                children={value}
            />
        </Container>
    );
};
