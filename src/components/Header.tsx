import { useConnect, useDisconnect, useIsConnected, useWalletAddress } from '@/contexts/Beacon';
import Link from 'next/link';
import React, { useEffect } from 'react';
import WalletButton from './WalletButton';

export default function Header(){
  //const theme = useTheme();
  const wallet = useWalletAddress();
  const connect= useConnect();
  const disconnect = useDisconnect();
  const isConnected = useIsConnected();

  return (
    <div className='flex flex-col gap-1 items-end'>
      <div className="flex items-center gap-4">
        <Link className='hover:underline' href={"/"}>Air France tickets</Link>
        <Link className='hover:underline' href={"/nft-tickets"}>Nft tickets</Link>
        {isConnected() &&
            <Link className='hover:underline' href={"/my-tickets"}>My tickets</Link>
        }
        <WalletButton />
      </div>
      {isConnected() &&
        <p>Your wallet : {wallet?.substr(0,7)}...{wallet?.substr(-4)}</p>
      }
    </div>
  )
}


