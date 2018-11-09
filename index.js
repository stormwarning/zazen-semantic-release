/* eslint-disable no-template-curly-in-string */

const releaseRules = require('@zazen/conventional-changelog/lib/release-rules')
const changelogTitle = require('@zazen/conventional-changelog/lib/changelog-title')

module.exports = {
    config: '@zazen/conventional-changelog',
    plugins: [
        ['@semantic-release/commit-analyzer', { releaseRules: releaseRules }],
        '@semantic-release/release-notes-generator',
        ['@semantic-release/changelog', { changelogTitle: changelogTitle }],
        [
            '@semantic-release/git',
            {
                message:
                    '📚 Add ${nextRelease.version} release notes [skip ci]',
            },
        ],
        '@semantic-release/npm',
        [
            '@semantic-release/git',
            { message: '🔖 Release ${nextRelease.version} [skip ci]' },
        ],
        '@semantic-release/github',
    ],
}
