const autoprefixer = require('autoprefixer');
const postcssVars = require('postcss-simple-vars');

module.exports = {
    plugins: [
        autoprefixer({
            browsers: ['last 5 versions']
        }),
        postcssVars()
    ]
};
