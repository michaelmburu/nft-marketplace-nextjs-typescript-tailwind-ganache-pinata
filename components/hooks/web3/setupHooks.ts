import { Web3Dependencies } from '@_types/hooks'
import { hookFactory as createAccountHook, UseAccountHook } from './useAccount'
import { hookFactory as createNetworkHook, UseNetworkHook } from './useNetwork'
import {hookFactory as createListedNFTsHook, UseListedNFTsHook} from './useListedNFTs'
import { hookFactory as createOwnedNFTsHook, UseOwnedNFTsHook} from './useOwnedNFTs'
export type Web3Hooks = {
  useAccount: UseAccountHook
  useNetwork: UseNetworkHook
  useListedNFTs: UseListedNFTsHook
  useOwnedNFTs: UseOwnedNFTsHook
}

export type SetupHooks = {
  (d: Web3Dependencies): Web3Hooks
}

export const setupHooks: SetupHooks = (deps) => {
  return {
    useAccount: createAccountHook(deps),
    useNetwork: createNetworkHook(deps),
    useListedNFTs: createListedNFTsHook(deps),
    useOwnedNFTs: createOwnedNFTsHook(deps)
  }
}
