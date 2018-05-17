module.exports = {
    filepath: 'src',
    tabWidth: 4,
    useTabs: false,
    printWidth: 100,
    overrides: [
        {
            files: '*.{ts,tsx,scss}',
            options: {
                parser: 'typescript',
                useTabs: true,
            },
        },
        {
            files: '*.{ts,tsx}',
            options: {
                parser: 'typescript',
                singleQuote: true,
                trailingComma: 'all',
                semi: true,
                bracketSpacing: true,
                jsxBracketSameLine: false,
                arrowParens: 'avoid',
            },
        },
        {
            files: '*.js',
            options: {
                parser: 'babylon',
                singleQuote: true,
                trailingComma: 'all',
            },
        },
        {
            files: '*.scss',
            options: {
                parser: 'css',
            },
        },
        {
            files: '*.md',
            options: {
                parser: 'markdown',
            },
        },
        {
            files: '*.json',
            options: {
                parser: 'json',
                tabWidth: 2,
            },
        },
    ],
};
