"use client";

import dynamic from 'next/dynamic';

const CounterPageClient = dynamic(() => import('./CounterPage'), {
    ssr: false,             // ← don’t render on server
    loading: () => null,    // optional loader
});

export default CounterPageClient