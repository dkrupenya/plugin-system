import {PluginA} from '../../../pluginA/src/app/plugin-a';

export class PluginB {
    prop: string = 'asdf';

    constructor(private pluginA: PluginA ) {
        console.log('construct plugin b');
    }

    method(): void {
        console.log('call method');
    }
}
