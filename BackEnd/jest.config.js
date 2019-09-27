module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testRegex: '\\.test\\.ts',
    moduleFileExtensions: ['ts', 'js'],
    globals: {
        'ts-jest': {
            isolatedModules: true,
            tsConfig: 'tsconfig.json'
        }
    }
};
