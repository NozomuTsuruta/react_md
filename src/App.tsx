import React from 'react';
import 'react-mde/lib/styles/css/react-mde-all.css';
import { Markdown } from './Markdown';
import { MarkdownEditor } from './MarkdownEditor';

export default function App() {
    const [value, set_value] = React.useState(``);

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <MarkdownEditor value={value} set_value={set_value} />
            <Markdown value={value} />
        </div>
    );
}
