import Head from 'next/head';

import { Inter } from '@next/font/google';

import type { Flight } from '@/types';
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

// const inter = Inter({ subsets: ['latin'] });
// interface HomeProps {
//   flights: Flight[];
// }

export async function getServerSideProps() {

  const tickets = await getTickets();
  
  return {
    props: { tickets : tickets}, // will be passed to the page component as props
  }
}

interface MyTicketsProps {
  tickets: any;
}


export default function MyTickets({tickets}: MyTicketsProps) {

  const walletAddress = useWalletAddress();
  const isConnected = useIsConnected();
  const [loaded, setLoaded] = useState(false)
  const [userTickets, setUserTickets] = useState([])
  const contractAddress = useContractAddress();

  useEffect(() => {
    const getKeys = async () => {
      const storage = await get_storage(contractAddress)
      const ledger = storage.ledger;
      const datas = await ledger.getMultipleValues(tickets.map((t:any) => t.nftId))
      const goodDatas = tickets.filter((t:any) => {
        let nId = `${t.nftId}`
        return datas.valueMap.has(nId) && (datas.valueMap.get(nId) == walletAddress)
      })
      
      setUserTickets(goodDatas);
      setLoaded(true)
    }
    if(tickets.length){
      if(isConnected()){
        getKeys();
      }
    } else {
      setLoaded(true);
    }

    
  }, [isConnected])

  return (
    <>
      <Head>
        <title>Airplace - My tickets</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='container flex flex-col items-center gap-8 mx-auto py-8'>
        <h1 className='text-2xl'>Dev Airplace - My NFT tickets</h1>

        {(loaded && isConnected()) && 
          <div className="flex flex-col gap-4">
            {userTickets.length ? userTickets.map((ticket, key) => {
              return (
                <div key={key}>
                  <TicketCard sell={false} ticket={ticket} />
                </ div>
              )
            }) :
              <p>Vous ne possédez aucun ticket</p>
            }
            
          </div>
        }
        {(!loaded && isConnected()) && 
          <p>Loading...</p>
        }
        {!isConnected() && 
          <p>Veuillez vous connecter à votre wallet pour voir vos billets.</p>
        }

      </div>
    </>
  );
}
