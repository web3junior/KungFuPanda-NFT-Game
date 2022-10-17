const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory('KungfuPanda');
  const gameContract = await gameContractFactory.deploy(
    ["Master Ping Xiao Po", "Master Shifu", "Master Tigress", 'Master Viper', 'Master Monkey', 'Master Mantis', 'Master Crane', 'Master Thundering Rhino', 'Master Storming Ox', 'Master Croc'], // Names
    ["QmSTew7MzNNLR7hELD2d3NuPW6S2aMs9seynSfcBWCbEbd", // Images
    "QmPLqKhY7jnxNMQ845ZeshVdJjMWCESDucCsE2ECGafVY2",
    "Qmdgd1cyr4XXH4677TVoJtbkijHJRk3s9KiWTon8xUcGQM",
    "QmVMJPYWasymABV39b18EbLjcPqfgpeogYXDkEi4ncJYtA",
    "QmNeLD4RBLUga1XCzwVGP9saxWLXV8VS8qXD2PP4wbZrkL",
    "QmYp2qMHhBQf3oBZdLrrytr8TBH1YgBFprMFqTc7TDbrqv",
    "QmbgmDALjQUgvEZ4Airbp1oe9oPrAcvR5XQrxY3CSVgnAW",
    "QmZbTcGyHXnbSAfAggGkEMzGeZn69tU3V5ymWuYQJ1qvTf",
    "QmeVcrDz2meKHBMC11knvaT9C1RMGnrfpaL11xiXCyJmYK",
    "QmVfZ6wN5o46edLuPUwqCKcCqRKxWFo93bk9NkN8PpNGVB"],
    [1000, 120, 200, 500, 120, 700, 100, 400, 500, 300], // HP values
    [80, 70, 20, 40, 25, 30, 50, 70, 45, 65], // Attack damage values
    "Lord Shen", // Boss name
    "https://i.ibb.co/wsxKg8f/Lord-Shen.png", // Boss image
    10000, // Boss hp
    50 // Boss attack damage
  );
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);
  //0x0d90878f8bFA08067679Efb40874CbaD170DeDb9
  //0x001541f0fcC59AF15e8cd5B5d023f6b7d288c720

  // let txn;
  // txn = await gameContract.mintCharacterNFT(2);
  // await txn.wait();

  // let returnedTokenUri = await gameContract.tokenURI(1);
  // console.log("Token URI:", returnedTokenUri);

  // let txn;

  // txn = await gameContract.mintCharacterNFT(0);
  // await txn.wait();

  // txn = await gameContract.attackBoss();
  // await txn.wait();

  // txn = await gameContract.attackBoss();
  // await txn.wait();

  // console.log("Done!");
  
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();