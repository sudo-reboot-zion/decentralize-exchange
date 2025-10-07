import TransactionList from '@/components/TxnsList';
import { fetchAddressTransaction } from '@/lib/fetch-address-transactions';
import { ExternalLinkIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

export default async function Activity(
    {params}:{params: Promise<{address: string}>}
) {
    const {address} = await params;

    const initialTransactions = await fetchAddressTransaction({address});

  return (
    <main className="flex h-[100vh-4rem] flex-col p-8 gap-8">
      <div className="flex items-center gap-4">
        <h1 className="text-3xl font-bold">{address}</h1>
        <Link
          href={`https://explorer.hiro.so/address/${address}`}
          target="_blank"
          className="rounded-lg flex gap-1 bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          <ExternalLinkIcon className="h-4 w-4" />
          View on Hiro
        </Link>
      </div>

      <TransactionList address={address} transactions={initialTransactions} />
    </main>
  );
}
