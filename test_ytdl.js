const ytdl = require('ytdl-core');

const videoUrl = 'https://www.youtube.com/watch?v=WPNAy5EXGkI'; // Usa la misma URL de prueba

ytdl.getInfo(videoUrl)
    .then(info => {
        console.log('Información del video:', info);
    })
    .catch(error => {
        console.error('Error al procesar la URL del video:', error);
    });
