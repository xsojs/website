import com from "@xso/com";

import Title from "../../../../components/Title";
import Code from "../../../../components/Code";

function Install() {
    this.view(() => [
        { [Title]: {
            level: 3,
            content: 'Install'
        } },
        { p: {
            _: [
                'Install the Router module where you have your ',
                { code: {
                    _: 'package.json'
                }},
                ', executing the command:'
            ]
        } },
        { [Code]: {
            _: 'npm install -S @xso/router'
        }},
        { p: {
            _: 'Even better is to use the PNPM:'
        } },
        { [Code]: {
            _: 'pnpm install @xso/router'
        }},
        { p: {
            _: 'Or if you prefer with Yarn: '
        } },
        { [Code]: {
            _: 'yarn add -S @xso/router'
        }},
        { p: {
            _: 'Any other package manager can be used as well.'
        } },
    ]);
}

export default com(Install);