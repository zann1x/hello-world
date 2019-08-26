const ghpages = require('gh-pages')

ghpages.publish(
    'public',
    {
        branch: 'master',
        repo: 'https://github.com/zann1x/zann1x.github.io.git'
    },
    () => {
        console.log('Deploy complete!')
    }
)
