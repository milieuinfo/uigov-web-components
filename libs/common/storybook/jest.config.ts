/* eslint-disable */
export default {
    displayName: 'common-storybook',
    preset: '../../../jest.preset.js',
    globals: {},
    transform: {
        '^.+\\.[tj]sx?$': [
            'ts-jest',
            {
                tsconfig: '<rootDir>/tsconfig.spec.json',
            },
        ],
    },
    transformIgnorePatterns: [],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    coverageDirectory: '../../../coverage/libs/common/storybook',
};
