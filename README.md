
## Install

```shell
npm ci
```

## Compile and deploy
- change the ```hardhat.config.js``` file with appropriate ```defaultNetwork = "skaleTestnet"```
- ```$npx hardhat compile```
- ```$npx hardhat run scripts/deploy.js```


## env
```
ADMIN_PKEY_TESTNET = 
MM_PKEY_TESTNET = 
```

# Network node 
stand alone local blockchain with rpc and webSocket
$npx hardhat node 
