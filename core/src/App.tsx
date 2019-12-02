import { h, Component, render } from 'preact';
import MyComponent from './MyComponent';

const App = (
    <div>
        <MyComponent name="John"></MyComponent>
    </div>
);


render(App, document.getElementById('root'));
