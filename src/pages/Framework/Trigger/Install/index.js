import com from "@xso/com";

import Anchor from "../../../../components/Anchor";
import Title from "../../../../components/Title";
import Code from "../../../../components/Code";

function Install() {
    this.view(() => [
        { [Anchor]: {
            name: 'install'
        } },
        { [Title]: {
            level: 3,
            content: 'Install'
        } },
        { p: {
            _: [
                'Install the Trigger module where you have your ',
                { code: {
                    _: 'package.json'
                }},
                ', executing the command:'
            ]
        } },
        { [Code]: {
            _: 'npm install -S @xso/trigger'
        }},
        { p: {
            _: 'Even better is to use the PNPM:'
        } },
        { [Code]: {
            _: 'pnpm install @xso/trigger'
        }},
        { p: {
            _: 'Or if you prefer with Yarn: '
        } },
        { [Code]: {
            _: 'yarn add -S @xso/trigger'
        }},
        { p: {
            _: 'Any other package manager can be used as well.'
        } },
    ]);
}

export default com(Install);