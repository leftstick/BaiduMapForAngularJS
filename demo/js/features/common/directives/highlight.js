import hljs from 'highlight.js';
export default {
    type: 'directive',
    name: 'highlight',

    directiveFactory: function() {
        return {
            restrict: 'A',
            link(scope, element, attrs) {
                const snippets = element[0].querySelectorAll('.snippet pre code');
                Array
                    .prototype
                    .slice
                    .apply(snippets)
                    .forEach(s => {
                        hljs.highlightBlock(s);
                    });
            }
        };
    }
};
