const path = require('path');

module.exports = {
	stories: ['../stories/**/*.stories.[tj]s*'],
	addons: [
		'@storybook/addon-actions',
		'@storybook/addon-links',
		{
			name: '@storybook/preset-typescript',
			options: {
				tsDocgenLoaderOptions: {
					tsconfigPath: path.resolve(__dirname, '../tsconfig.json'),
				},
				include: [
					path.resolve(__dirname, '../src'),
					path.resolve(__dirname, '../stories'),
				],
			},
		},
		'@storybook/preset-scss',
	],
};
