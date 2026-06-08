"use client";

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import DynamicWork from '@/components/DynamicWork';
import { worksMetadata } from '@/works/metadata';

function WorkContent() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  
  if (!id) {
    return <div style={{ color: 'white', padding: '100px', textAlign: 'center' }}>No work ID provided.</div>;
  }

  // Find the work item by id (converting both to string to be safe)
  const work = worksMetadata.find((w) => w.id?.toString() === id || w.slug === id);

  if (!work) {
    return <div style={{ color: 'white', padding: '100px', textAlign: 'center' }}>Work case study not found.</div>;
  }

  return (
    <DynamicWork
      category={work.category}
      title={work.title}
      content={work.description}
      image={work.image}
    />
  );
}

export default function WorkPage() {
  return (
    <Suspense fallback={<div style={{ color: 'white', padding: '100px', textAlign: 'center' }}>Loading work case study...</div>}>
      <WorkContent />
    </Suspense>
  );
}
