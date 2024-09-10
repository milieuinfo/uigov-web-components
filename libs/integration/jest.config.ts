import type { JestConfigWithTsJest } from 'ts-jest';

const jestConfig: JestConfigWithTsJest = {
    displayName: 'integration - Jest tests',
    transform: {
        '^.+\\.[tj]s$': [
            'ts-jest',
            {
                tsconfig: '<rootDir>/tsconfig.spec.json',
            },
        ],
    },
    transformIgnorePatterns: [],
    testEnvironment: 'jsdom',
};

export default jestConfig;
