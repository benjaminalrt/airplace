import Head from 'next/head';

import { Inter } from '@next/font/google';

import type { Flight } from '@/types';
import client from '@/apolloClient';
import { getAllFlightsQuery } from '@/apollo/queries/getAllFlights';
import FlightCard from '@/components/Flight';
import { useEffect, useState } from 'react';
import { useContract } from '@/contexts/Contract';
import { useIsConnected, useWalletAddress } from '@/contexts/Beacon';
import { get_balance, get_raw_storage, get_storage } from '@completium/dapp-ts';
import { useTezosToolkit } from '@/contexts/Taquito';
import { useContractAddress } from '@/contexts/Settings';
import flights from '../../datas/flights.json';
import { getTickets } from '@/symfony/getTickets';
import TicketCard from '@/components/Ticket';
import { getOnSaleTickets } from '@/symfony/getOnSaleTickets';

// const inter = Inter({ subsets: ['latin'] });
// interface HomeProps {
//   flights: Flight[];
// }

export async function getServerSideProps() {

  const tickets = await getOnSaleTickets();
  
  return {
    props: { tickets : tickets}, // will be passed to the page component as props
  }
}

interface NftTicketsProps {
  tickets: any;
}


export default function MyTickets({tickets}: NftTicketsProps) {

  const walletAddress = useWalletAddress();
  const isConnected = useIsConnected();
  const [loaded, setLoaded] = useState(false)
  const [userTickets, setUserTickets] = useState([])
  const contractAddress = useContractAddress();

  return (
    <>
      <Head>
        <title>Airplace - Nft tickets</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='container flex flex-col gap-8 mx-auto py-8'>
        <h1 className='text-2xl'>Dev Airplace - NFT tickets marketplace</h1>

        <div className="flex flex-wrap gap-16">
        {tickets.length ? tickets.map((ticket, key) => {
            return (
            <div key={key}>
                <TicketCard sell={true} ticket={ticket} />
            </ div>
            )
        }) :
            <p>Aucun ticket en ligne</p>
        }
        
        </div>

      </div>
    </>
  );
}