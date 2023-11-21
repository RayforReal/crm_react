import plugin from 'windicss/plugin';

export default {
    alias: {
        'flex-cc': 'flex items-center justify-center',
    },
    plugins: [
        plugin(({addUtilities}) => {
            console.log(addUtilities)
            const newUtilities = {
                '.flex-cc': {
                    'display': 'flex',
                    'align-items': 'center',
                    'justify-content': 'center'
                },
            }
            addUtilities(newUtilities)
        }),
    ]
}
