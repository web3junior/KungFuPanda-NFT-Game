const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('KungfuPanda');
    const gameContract = await gameContractFactory.deploy(
      ["Master Ping Xiao Po", "Master Shifu", "Master Tigress", 'Master Viper', 'Master Monkey', 'Master Mantis', 'Master Crane', 'Master Thundering Rhino', 'Master Storming Ox', 'Master Croc'], // Names
      ["https://i.ibb.co/2Nnx4HL/Master-Ping-Xiao-Po.png", // Images
      "https://i.ibb.co/fx0ZvVr/Master-Shifu.png",
      "https://i.ibb.co/nDhRZ33/Master-Tigress.png",
      "https://i.ibb.co/r32g0Y4/Master-Viper.png",
      "https://i.ibb.co/d6SfCkX/Master-Monkey.png",
      "https://i.ibb.co/0FxjTkT/Master-Mantis.png",
      "https://i.ibb.co/GQCVL9R/Master-Crane.png",
      "https://i.ibb.co/Z85Jm0C/Master-Thundering-Rhino.png",
      "https://i.ibb.co/dgWxpJS/Master-Storming-Ox.png",
      "https://i.ibb.co/7Wy82SG/Master-Croc.png"],
      [1000, 120, 200, 500, 120, 700, 100, 400, 500, 300], // HP values
      [80, 70, 20, 40, 25, 30, 50, 70, 45, 65], // Attack damage values
      "Lord Shen", // Boss name
      "https://i.ibb.co/wsxKg8f/Lord-Shen.png", // Boss image
      10000, // Boss hp
      50 // Boss attack damage
    );
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);
    
    // test 1

    // let txn;
    // txn = await gameContract.mintCharacterNFT(2);
    // await txn.wait();

    // let returnedTokenUri = await gameContract.tokenURI(1);
    // console.log("Token URI:", returnedTokenUri);
    
    // test 2

    // let txn;
    // txn = await gameContract.mintCharacterNFT(2);
    // await txn.wait();

    // txn = await gameContract.attackBoss();
    // await txn.wait();

    // txn = await gameContract.attackBoss();
    // await txn.wait();

    // txn = await gameContract.attackBoss();
    // await txn.wait();

    // txn = await gameContract.attackBoss();
    // await txn.wait();

    // txn = await gameContract.attackBoss();
    // await txn.wait();

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