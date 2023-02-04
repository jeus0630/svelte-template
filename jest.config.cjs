module.exports = {
    testEnvironment: 'jsdom',
    collectCoverageFrom: [
        'src/**/*.{ts,js, svelte}',
        '!src/App.tsx',
        '!src/env.ts',
        '!src/{stories,store,mocks,utils}/**',
        '!src/**/*.{types,type,stories,constants,test,spec}.{ts,tsx}',
        '!**/*.d.ts',
        '!**/*.config.*',
        '!**/node_modules/**',
        '!**/.yarn/**'
    ],
    testMatch: [
        '<rootDir>/__tests__/**/*.(spec|test).ts',
        '<rootDir>/src/**/*.(spec|test).ts',
    ],
    moduleNameMapper: {
        '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
        '^.+\\.(css|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',
        '^.+\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js',

        '^src/(.*)$': '<rootDir>/src/$1',
    },
    setupFilesAfterEnv: [
        '<rootDir>/jest.setup.ts',
        'jest-plugin-context/setup',
    ],
    testPathIgnorePatterns: [
        '<rootDir>/node_modules/',
        '<rootDir>/.yarn/'
    ],
    transform: {
        '^.+\\.(js|ts|svelte)$': [
            '@swc/jest',
            {
                sourceMaps: true,
                jsc: {
                    parser: {
                        syntax: 'typescript',
                        decorators: false,
                        dynamicImport: false,
                    },
                    transform: {
                        react: {
                            runtime: 'automatic',
                        },
                    },
                },
            },
        ],
    },
    coveragePathIgnorePatterns: [
        '/node_modules/',
        '^.+\\.module\\.(css|sass|scss)$',
        'coverage',
        'src/main.ts',
        '.yarn',
        'src/config.ts',
    ],
    coverageThreshold: {
        global: {
            branches: 100,
            functions: 100,
            lines: 100,
            statements: 100,
        },
    },
};
