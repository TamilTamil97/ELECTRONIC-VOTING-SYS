import { ethers } from "ethers";
import abi from "./voting.json";

export const contractAddress = "0x4D2A9eDB5e40286483d45Ef8e09E010e058b3F4f";

export const provider = new ethers.providers.Web3Provider(window.ethereum);
export const signer = provider.getSigner();

export const votingContract = new ethers.Contract(contractAddress, abi, signer);
