declare const System: any;

import './App';

import * as Preact from 'preact';
// import * as SystemJS from 'systemjs/dist/system.js';

System.set('preact', Preact);

System.import('../dist/plugins/plugin-a.bundle.js').then(res => {
    const module = res;
    console.log(module);
    const pluginA = module.default.PluginA;
    new pluginA();

});

