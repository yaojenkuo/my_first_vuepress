module.exports = {
    title: 'DataInPoint',
    description: 'The best data science portal in Taiwan.',
    themeConfig: {
        nav: [
            { 'text': '輕鬆學習 Python', link: '/easy-python/' },
            { 'text': '輕鬆學習 R 語言', link: '/easy-r/' },
            { 'text': '進擊的資料科學', link: '/data-science-in-action/' },
            { 'text': 'Medium 專欄', link: 'https://medium.com/datainpoint' }
        ],
        sidebar: {
            '/easy-python/': [
                'chapter01',
                'chapter02'
            ],
            '/easy-r/': [
                'chapter01',
                'chapter02'
            ],
            '/data-science-in-action/': [
                'chapter01',
                'chapter02'
            ]
        }
    },
    markdown: {
        lineNumbers: true
    }
}
