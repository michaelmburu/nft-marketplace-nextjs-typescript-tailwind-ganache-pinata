import {
  Children,
  FunctionComponent,
  PropsWithChildren,
  createContext,
  useContext,
  useState,
  useEffect
} from 'react'
import { createDefaultState, Web3State } from './utils'
import { ethers } from 'ethers'

const Web3Context = createContext<Web3State>(createDefaultState())

const Web3Provider: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const [web3API, setWeb3API] = useState<Web3State>(createDefaultState())
  useEffect(() => {
    function initWeb3() {
      const provider = new ethers.providers.Web3Provider(window.ethereum as any)
      setWeb3API({
        ethereum: window.ethereum,
        provider: provider,
        contract: null,
        isLoading: false
      })
    }

    initWeb3()
  }, [])
  return <Web3Context.Provider value={web3API}>{children}</Web3Context.Provider>
}

export const useWeb3 = () => {
  return useContext(Web3Context)
}

export default Web3Provider