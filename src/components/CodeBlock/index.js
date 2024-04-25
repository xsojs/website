import com from "@xso/com";
import css from "@xso/css";

import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import xml from 'highlight.js/lib/languages/xml';
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('html', xml);

import styles from "./styles";

function CodeBlock({source, language = 'javascript'}) {
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
        ref.set({ pre: {
            class: css(styles.codeBlock) + ' language-'+ language,
            _: finalSource.trim()
        } })
    ]);
}

export default com(CodeBlock);