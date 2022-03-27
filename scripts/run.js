const main = async () => {
  const myContractFactory = await hre.ethers.getContractFactory('MyContract')
  const myContract = await myContractFactory.deploy()
  await myContract.deployed()
  console.log('Contract deployed to:', myContract.address)
}

const runMain = async () => {
  try {
    await main()
    process.exit(0)
  } catch (e) {
    console.error(e)
    process.exit(1)
  }
}

runMain()
