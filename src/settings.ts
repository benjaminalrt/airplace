import constate from "constate";
import { useState } from 'react';

export function useSettings() {

  const [settings,setState] = useState({
    network  : 'ghostnet',
    endpoint : 'https://ghostnet.ecadinfra.com',
    contract : 'KT1KSSPcvaQKTXMS4mbssxZC85c5NkhhpFot',
    show     : false,
  });

  const setNetwork = (nw : any) => { setState((s) => {
      return { ...s, network: nw };
    });
  }

  const setEndpoint = (ep : any) => { setState((s) => {
      return { ...s, endpoint: ep };
    });
  }

  const setContract = (c : any) => { setState((s) => {
      return { ...s, contract: c };
    });
  }

  const hideSettings = () => { setState((s) => {
      return { ...s, show: false };
    })
  }

  const showSettings = () => { setState((s) => {
      return { ...s, show: true };
    })
  }

  const getBcdUrl = () => {
    return 'https://better-call.dev/' + settings.network + '/' + settings.contract;

  }

  return { settings, setNetwork, setEndpoint, setContract, hideSettings, showSettings, getBcdUrl };
}

export const [SettingsProvider, useSettingsContext] = constate(useSettings);

export const appName = "My First Completium DApp"

// fonts
export const courier = "Courier Prime, monospace";
export const alegreya = "Alegreya Sans SC, sans-serif";
