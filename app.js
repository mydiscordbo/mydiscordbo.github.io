const socket = io.connect('https://insight.vkax.xyz/socket.io/socket.io.js');

socket.on('block', (data) => {
  document.getElementById('block-height').innerHTML = `Block Height: ${data.height}`;
  document.getElementById('block-hash').innerHTML = `Block Hash: ${data.hash}`;
});

socket.on('peers', (data) => {
  document.getElementById('peers').innerHTML = `Peers: ${data.length}`;
});
