module.exports = {
    title: 'Canyon',
    description: 'Minecraft Beta 1.7.3, unleashed.',
    themeConfig: {
        repo: 'canyonmodded/canyon',
        editLinks: true,
        docsRepo: 'canyonmodded/docs',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            { text: 'Demo Server', link: '/demo' }
        ],
        sidebar: {
            '/guide/': [
                {
                    title: 'Canyon Guide',
                    collapsable: false,
                    children: [
                        '',
                        'getting-started',
                        'configuration'
                    ]
                }
            ]
        }
    }
};
  