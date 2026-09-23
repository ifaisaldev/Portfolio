import type { MetadataRoute } from 'next';
import { SITE_DESCRIPTION, SITE_TITLE } from '@/lib/site';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: SITE_TITLE,
        short_name: 'Faisal Mehmood',
        description: SITE_DESCRIPTION,
        start_url: '/',
        display: 'browser',
        background_color: '#f8fafc',
        theme_color: '#f8fafc',
        icons: [
            { src: '/icon', sizes: '32x32', type: 'image/png' },
            { src: '/apple-icon', sizes: '180x180', type: 'image/png' },
        ],
    };
}
