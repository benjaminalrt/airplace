import type { AppProps } from 'next/app';
import Link from 'next/link';
import '../globals.css';
import { SettingsProvider } from '@/contexts/Settings';
import { TaquitoProvider } from '@/contexts/Taquito';
import { BeaconProvider, useIsConnected } from '@/contexts/Beacon';
import { ContractProvider } from '@/contexts/Contract';
import WalletButton from '@/components/WalletButton';
import Header from '@/components/Header';

export default function App({ Component, pageProps }: AppProps) {

  return (
    <div className="App">
      <SettingsProvider>
        <TaquitoProvider>
          <BeaconProvider>
            <ContractProvider>
              <div className="bg-white min-h-screen flex flex-col">
                <div className="flex items-center h-20 bg-gray-200 shadow-lg">
                  <div className="container mx-auto flex items-center justify-between">
                    <h1>Airplace</h1>
                    <div className="flex items-center gap-8">
                      <Header />
                    </div>
                  </div>
                </div>
                <Component {...pageProps} />
              </div>
            </ContractProvider>
          </BeaconProvider>
        </TaquitoProvider>
      </SettingsProvider>
    </div>
  );
}
