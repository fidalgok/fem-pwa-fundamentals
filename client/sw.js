const counts = {
  installs: 0,
  activations: 0,
  fetches: 0,
};

self.addEventListener('install', event => {
  console.log(`I've been installed ${++counts.installs}`);
});

self.addEventListener('activate', event => {
  console.log(`I've been activated: ${++counts.activations}`);
});

self.addEventListener('fetch', event => {
  console.log(`I'm fetching stuff: ${++counts.fetches}`);
  //console.log(event);
});
