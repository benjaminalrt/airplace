import { TezosToolkit } from '@taquito/taquito';
import { useState } from 'react';
import { importKey } from '@taquito/signer';

import constate from 'constate';
import { useEndpoint } from './Settings';

export const [
  TaquitoProvider,
  useTezosToolkit
] = constate(
  () => {
    const endpoint = useEndpoint()
    const [taquito] = useState(() : { tezos : TezosToolkit } => ({
      ttk: new TezosToolkit(endpoint),
    }));
    return taquito;
  },
  (v) => v.ttk,
);