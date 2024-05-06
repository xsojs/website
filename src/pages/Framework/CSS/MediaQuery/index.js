import com from "@xso/com";

import Anchor from "../../../../components/Anchor";
import Title from "../../../../components/Title";
import CodeBlock from "../../../../components/CodeBlock";

function Install() {
    this.view(() => [
        { [Anchor]: {
            name: 'media-query'
        } },
        { [Title]: {
            level: 3,
            content: 'Media Query'
        } },
        { p: {
            _: [
                'Can use any sector from Style/CSS and LESS/SASS.'
            ]
        } },
        { p: {
            _: 'Here a simple example of a style object:'
        } },
        { [CodeBlock]: {
            source: `
            import React from 'react';
            import css from '@xso/css';

            import styles from './styles.js';

            function MyReactComponent() {
                return (
                    <div className={ css(styles.myFirstStyle) }>
                        My React Component styled with XSO.
                    </div>
                );
            }

            export default MyReactComponent;
            `
        }},
    ]);
}

export default com(Install);