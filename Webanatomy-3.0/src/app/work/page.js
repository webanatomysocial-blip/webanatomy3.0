"use client";

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import DynamicWork from '@/components/DynamicWork';
import { worksMetadata } from '@/works/metadata';
import ToggleNow from '@/works/ToggleNow';
import ThreatSenseAI from '@/works/threatsenseai';
import TheSase from '@/works/TheSase';
import PiedPippers from '@/works/piedpippers';

function WorkContent() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  
  if (!id) {
    return <div style={{ color: 'white', padding: '100px', textAlign: 'center' }}>No work ID provided.</div>;
  }

  // Find the work item by id (converting both to string to be safe)
  const work = worksMetadata.find(
    (w) =>
      w.id?.toString().toLowerCase() === id.toLowerCase() ||
      w.slug?.toLowerCase() === id.toLowerCase()
  );

  if (!work) {
    return <div style={{ color: 'white', padding: '100px', textAlign: 'center' }}>Work case study not found.</div>;
  }

  const workIdLower = work.id?.toString().toLowerCase();

  if (workIdLower === 'togglenow') {
    return <ToggleNow />;
  }
  if (workIdLower === 'threatsenseai') {
    return <ThreatSenseAI />;
  }
  if (workIdLower === 'thesase') {
    return <TheSase />;
  }
  if (workIdLower === 'piedpippers') {
    return <PiedPippers />;
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
    <div style={{ color: "#000000", backgroundColor: "#ffffff", minHeight: "100vh" }}>
      <Suspense fallback={<div style={{ color: 'white', padding: '100px', textAlign: 'center' }}>Loading work case study...</div>}>
        <WorkContent />
      </Suspense>
    </div>
  );
}
