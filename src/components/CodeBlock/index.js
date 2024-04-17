import com from "@xso/com";
import css from "@xso/css";

import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage('javascript', javascript);

import styles from "./styles";

function CodeBlock({source}) {
    let finalSource = '';
    let padding = 0;
    for (const line of source.split('\n')) {
        if (padding == 0 && line != '') {
            for (let i = 0; i < line.length; i++) {
                if (line[i] == ' ') {
                    padding++;
                } else {
                    break;
                }
            }
        }
        finalSource += line.substring(padding) + '\n';
    }
    const ref = this.ref();
    this.changes([ref], () => {
        hljs.highlightElement(ref.current);
    });
    this.view(() => [
        ref.set({
            pre: {
                class: css(styles.codeBlock),
                _: finalSource.trim()
            }
        })
    ]);
}

export default com(CodeBlock);