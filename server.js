const express = require('express');
const ytdl = require('ytdl-core');
const cors = require('cors');
const app = express();

app.use(cors()); // Habilita CORS para permitir solicitudes desde el frontend

app.get('/getDirectUrl', async (req, res) => {
    const { videoUrl, format } = req.query;
    try {
        if (!ytdl.validateURL(videoUrl)) {
            return res.status(400).json({ error: 'URL no válida' });
        }

        const info = await ytdl.getInfo(videoUrl);

        // Seleccionar el formato de audio más alto disponible
        let mediaFormat;

        if (format === 'mp3') {
            // Encuentra el primer formato de solo audio
            mediaFormat = ytdl.chooseFormat(info.formats, { filter: 'audioonly', quality: 'highestaudio' });
        } else {
            // Encuentra el formato de video con audio
            mediaFormat = ytdl.chooseFormat(info.formats, { filter: formatType => formatType.hasAudio && formatType.hasVideo });
        }

        // Maneja el caso en el que el formato aún no se encuentra
        if (!mediaFormat || !mediaFormat.url) {
            return res.status(404).json({ error: 'No se encontró un formato compatible para este video' });
        }

        res.json({ directUrl: mediaFormat.url });
    } catch (error) {
        console.error('Error al procesar la URL del video:', error.message);
        res.status(500).json({ error: 'Error procesando la URL del video', details: error.message });
    }
});



const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
