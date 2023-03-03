import React from 'react';
import type { Flight } from '@/types';
import Link from 'next/link';
import flights from '../../datas/flights.json';
import { useWalletAddress } from '@/contexts/Beacon';

interface TicketProps {
    ticket: any;
    sell: boolean;
}

export default function TicketCard({ ticket, sell = false }: TicketProps) {

  const flight : Flight|undefined = flights.find(f => f.id == ticket.flightId)
  const walletAddress = useWalletAddress();

  // FIXME
  return (
    <div className='flex flex-col gap-4 items-center'>
      <div className="w-48 h-48">
        <img className='object-cover' src={`https://benjami.fr/assets/${flight.city}.png`} alt="" />
      </div>
      <div className="flex flex-col gap-2 items-center">
        <p>To {flight?.destination}</p>
        <p className={`font-bold ${ticket.onSale ? 'text-green-400' : 'text-red-400'}`}>{ticket.onSale ? 'ON SALE' : 'NOT ON SALE'}{sell && ticket.walletAddress == walletAddress ? ' - YOURS' : ''}</p>
        {sell ?
          <Link className='font-bold hover:underline' href={`/nft-tickets/${ticket.nftId}`}>Show details</Link>
          :
          <Link className='font-bold hover:underline' href={`/my-tickets/${ticket.nftId}`}>Show details</Link>
        }
      </div>
    </div>
  );
}

