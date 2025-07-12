"use client";

import dynamic from 'next/dynamic';

const GlobalPageClient = dynamic(() => import('./GlobalPage'), {
    ssr: false,             // ← don’t render on server
    loading: () => null,    // optional loader
});

export default GlobalPageClient