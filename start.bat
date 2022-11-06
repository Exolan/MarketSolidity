start geth --datadir ./ --networkid 15 --http --http.api "personal, web3, net, eth" --http.corsdomain "*" --allow-insecure-unlock
start geth attach \\.\pipe\geth.ipc --exec miner.start(2)
cd ..\
start npm install
start npm start