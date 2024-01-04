import { Base58 } from "@koinos/sdk-as";

export namespace Constants {
  export const NAME: string = "Koinos Houses";
  export const SYMBOL: string = "KHOUSE";
  export const MINT_PRICE: u64 = 1000000000;
  export const MINT_FEE: bool = false;
  export const MAX_SUPPLY: u64 = 75;
  export const URI: string = "http://nftkoinos.rf.gd";
  export const OWNER: Uint8Array = Base58.decode("1JDX5tWhhioBRNrKCteAbhL4K8oR54dwxe");

  // token mint
  export const TOKEN_PAY: Uint8Array = Base58.decode("15DJN4a8SgrbGhhGksSBASiSYjGnMU8dGL");
  export const ADDRESS_PAY: Uint8Array = Base58.decode("1JDX5tWhhioBRNrKCteAbhL4K8oR54dwxe");
}
