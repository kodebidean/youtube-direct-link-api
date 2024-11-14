const ytdl = require('ytdl-core');

const url = 'https://www.youtube.com/watch?v=5zfu8C-Cmpo';
ytdl.getInfo(url).then(info => {
  const audioFormat = ytdl.chooseFormat(info.formats, { quality: 'highestaudio' });
  console.log('Audio URL:', audioFormat.url);
});

