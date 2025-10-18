import localFont from 'next/font/local';

export const LibreBaskerville = localFont({
    src: [
        { path: '../../public/fonts/LibreBaskerville-Regular.woff2', weight: '400' },
        { path: '../../public/fonts/LibreBaskerville-Bold.woff2', weight: '700' },
    ],
    display: 'swap',
    variable: '--font-libre-baskerville',
})

export const PlayfairDisplay = localFont({
    src: [
        { path: '../../public/fonts/PlayfairDisplay-Regular.woff2', weight: '400'},
        { path: '../../public/fonts/PlayfairDisplay-SemiBold.woff2', weight: '600'},
        { path: '../../public/fonts/PlayfairDisplay-Bold.woff2', weight: '700'},
    ],
    display: 'swap',
    variable: '--font-playfair-display'
})

export const Karla = localFont({
    src: [
        { path: '../../public/fonts/Karla-Light.woff2', weight: '300'},
        { path: '../../public/fonts/Karla-Regular.woff2', weight: '400'},
        { path: '../../public/fonts/Karla-Bold.woff2', weight: '700'},
    ],
    display: 'swap',
    variable: '--font-karla'
})
