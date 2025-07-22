'use client';
import { useEffect } from 'react';
export default function FollowCursor() {
  useEffect(() => {
    // Logika tracking mouse dari script
  }, []);
  return (
    <>
      <div className="highlight-circle" />
      <div className="secondary-circle" />
    </>
  );
}