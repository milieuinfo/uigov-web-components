/* eslint-disable */
export default {
    displayName: 'tools',
    preset: '../../jest.preset.js',
    globals: {},
    transform: {
        '^.+\\.[tj]sx?$': [
            'ts-jest',
            {
                tsconfig: '<rootDir>/tsconfig.json',
            },
        ],
    },
    transformIgnorePatterns: [],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    coverageDirectory: '../../coverage/tools',
};
