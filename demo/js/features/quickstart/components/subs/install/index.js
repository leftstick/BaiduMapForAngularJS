import './install.css';
import hljs from 'highlight.js';
export default {
    template: `
        <h1>Install</h1>
        <ul class="install-menu">
            <li>
                <div>
                    <div class="install-title">Npm:</div>
                    <div class="snippet">
                        <pre><code class="bash">bower install angular-baidu-map</code></pre>
                    </div>
                </div>
            </li>
        </ul>
    `,
    controller: class {
        /*ngInject*/
        constructor() {}

        $onInit() {
            hljs.initHighlighting();
        }
    }
};
