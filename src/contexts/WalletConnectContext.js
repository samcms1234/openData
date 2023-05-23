import { createContext, useState } from "react";

const WalletConnectContext = createContext({});


export const WalletConnectProvider = ({ children }) => {

  const [isConnected, setIsConnected] = useState(false);
  const [publicKey, setPublicKey] = useState('');

  return (
    <WalletConnectContext.Provider value={{
        isConnected, setIsConnected
    }}>
        { children }
    </WalletConnectContext.Provider>
  )
}

export default WalletConnectContext;