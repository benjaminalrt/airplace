import React from 'react';
import type { Flight } from '@/types';
import { ymd } from '@/utils/dayjs';
import Link from 'next/link';
import WalletButton from '../WalletButton';

interface FlightProps {
    flight: Flight;
    detailPage?: boolean
}

export default function FlightCard({ flight, detailPage = false }: FlightProps) {
  // FIXME
  return (
    <div className="shadow-lg rounded-lg bg-gray-100 flex flex-col gap-2 p-4">
      <div className="flex items-center justify-between">
        <p>{ymd(flight.departureTime)} - {ymd(flight.arrivalTime)}</p>
        <p className="text-right   font-semibold">{flight.price} USD</p>
      </div>
      <div>
        <p className='flex'><span className='w-16'>From :</span>{flight.origin}</p>
        <p className='flex'><span className='w-16'>To :</span>{flight.destination}</p>
      </div>

      <div className='flex justify-end mt-4'>
        {!detailPage && 
            <Link href={`/flights/${flight.id}`} className="bg-white hover:bg-gray-200 border rounded-lg px-3 py-2">Show details</Link>
        }
      </div>
    </div>
  );
}

