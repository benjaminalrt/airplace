import { useConnect, useDisconnect, useIsConnected, useWalletAddress } from '@/contexts/Beacon';
import React, { useEffect } from 'react';

export default function WalletButton({connectedContent = "Disconnect", disconnectedContent = "Connect to wallet"} : any){
  //const theme = useTheme();
  const wallet = useWalletAddress();
  const connect= useConnect();
  const disconnect = useDisconnect();
  const isConnected = useIsConnected();

  return ((isConnected()) ? (
          <button type='button' className="bg-white hover:bg-gray-200 border rounded px-3 py-2" onClick={disconnect} >{connectedContent}</button>
    ) :(<div>
          <button type='button' className="bg-white hover:bg-gray-200 border rounded px-3 py-2" onClick={connect}>{disconnectedContent}</button>
        </div>
      ));
}