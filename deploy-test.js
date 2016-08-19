var sample = new Message({
  url: 'https://nomedu.slack.com/archives/side-project/p1471531938000037',
  date: new Date(),
  username: 'sintesi',
  content: 'hey everyone, ideas are welcome for the name of the digest bot!',
  votes: 1
});

sample.save(function (err) {
  if (err) {
    console.log('deploy-test.js storing sample:', err);
  } else {
    console.log('deploy-test.js storing sample:', 'done.');
  }
});
