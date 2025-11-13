import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: [
                '/login/',
                '/signup/',
                '/privacy/',
                '/terms/',
                '/cookies/',
            ],
        },
        sitemap: [
            'https://conversa-verlix.vercel.app/sitemap.xml',
            'https://conversa-verlix.vercel.app/image-sitemap.xml',
            'https://conversa-verlix.vercel.app/video-sitemap.xml',
        ]
    }
}