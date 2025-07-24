'use client';

import React from 'react';
import Link from 'next/link';

function Page() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Grid Option Examples</h1>

      <div className="flex flex-col space-y-4">
        <Link href="/grid/option1" className="text-blue-600 hover:underline">
          Option 1
        </Link>
        <Link href="/option2" className="text-blue-600 hover:underline">
          Option 2
        </Link>
        <Link href="/option3" className="text-blue-600 hover:underline">
          Option 3
        </Link>
      </div>
    </div>
  );
}

export default Page;
