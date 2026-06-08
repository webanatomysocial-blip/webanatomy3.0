"use client";

import React, { Suspense } from 'react';
import { useSearchParams, notFound } from 'next/navigation';
import DynamicBlog from '@/components/dynamicblog';
import { blogsData } from '@/Blogs/MetaData';

function BlogContent() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  
  if (!id) {
    return <div style={{ color: 'white', padding: '100px', textAlign: 'center' }}>No blog ID provided.</div>;
  }

  const blog = blogsData.find((b) => b.id.toString() === id);

  if (!blog) {
    return <div style={{ color: 'white', padding: '100px', textAlign: 'center' }}>Blog not found.</div>;
  }

  return (
    <DynamicBlog
      category="Insights"
      title={blog.title}
      content={blog.description}
      image={blog.image}
      date={blog.date}
    />
  );
}

export default function BlogPage() {
  return (
    <Suspense fallback={<div style={{ color: 'white', padding: '100px', textAlign: 'center' }}>Loading blog...</div>}>
      <BlogContent />
    </Suspense>
  );
}
