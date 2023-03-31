const CONTRACT_ADDRESS = "0xee527552D89B1f7b65011930c4d739754120FdE1";
const META_DATA_URL =
  "ipfs://bafyreighz3b4dsf5k65s4d2g6ix2avztkeilig55yoq4cj6h2suwo6temu/metadata.json";

// paste function here
// Function to mint NFT
async function mintNFT(contractAddress, metaDataURL) {
  const ExampleNFT = await ethers.getContractFactory("ExampleNFT");
  const [owner] = await ethers.getSigners();
  await ExampleNFT.attach(contractAddress).mintNFT(owner.address, metaDataURL);
  console.log("NFT minted to: ", owner.address);
}

mintNFT(CONTRACT_ADDRESS, META_DATA_URL)
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
