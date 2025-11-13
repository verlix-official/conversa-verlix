import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://conversa-verlix.vercel.app',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: 'https://conversa-verlix.vercel.app/demo',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: 'https://conversa-verlix.vercel.app/faq',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: 'https://conversa-verlix.vercel.app/contact',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: 'https://conversa-verlix.vercel.app/support',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: 'https://conversa-verlix.vercel.app/upgrade',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },

        {
            url: 'https://conversa-verlix.vercel.app',
            lastModified: '2025-11-07',
            changeFrequency: 'weekly',
            priority: 0.5,
            images: [
                'https://conversa-verlix.vercel.app/dashboard-preview.jpg',
                'https://conversa-verlix.vercel.app/demo-1.jpg',
                'https://conversa-verlix.vercel.app/demo-2.jpg',
                'https://conversa-verlix.vercel.app/demo-3.jpg',
            ],
        },

        {
            url: 'https://conversa-verlix.vercel.app/demo',
            lastModified: '2025-11-07',
            changeFrequency: 'weekly',
            priority: 0.9,
            videos: [
                {
                    title: 'Conversa Verlix | Modern AI Chat Tool Landing Page Showcase',
                    thumbnail_loc: 'https://img.youtube.com/vi/tBv2xWCS3wo/maxresdefault.jpg',
                    description: 'Explore Conversa Verlix, a modern and responsive AI Chat Tool Landing Page designed for startups, developers, and SaaS creators.',
                },
            ],
        },
    ]
}
