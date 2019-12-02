export class PluginA {
    prop: string = 'asdf';

    constructor() {
        console.log('construct plugin a');
    }

    method(): void {
        console.log('call method');
    }
}
