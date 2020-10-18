import React from 'react';
import 'react-mde/lib/styles/css/react-mde-all.css';
import styled from 'styled-components';
import { Markdown } from './Markdown';
import { MarkdownEditor } from './MarkdownEditor';

export default function App() {
    const [value, set_value] = React.useState(``);

    return (
        <Page>
            <MarkdownEditor value={value} set_value={set_value} />
            <Markdown value={value} />
        </Page>
    );
}

const Page = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Container = styled.div`
    width: 50%;
`;
