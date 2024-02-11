async function connectWallet() {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        if (accounts.length > 0) {
          console.log('Wallet already connected:', accounts[0]);
          return;
        }
        
        await window.ethereum.request({ method: 'eth_requestAccounts' });

        window.web3 = new Web3(window.ethereum);
        console.log('Connected to wallet:', window.web3.currentProvider);
      } catch (error) {
        console.error(error);
      }
    } else {
      console.error('MetaMask not detected!');
    }
  }