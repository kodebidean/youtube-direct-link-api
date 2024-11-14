---
# YouTube Direct Link Backend

Este backend permite obtener enlaces directos de audio y video de YouTube usando la librería `ytdl-core`, de modo que aplicaciones frontend o servicios de descarga puedan acceder a ellos fácilmente.

## Características

- **Obtiene enlaces directos de YouTube**: Permite extraer enlaces de flujo de solo audio o video con audio directamente desde YouTube.
- **Soporte para formatos de audio y video**: Compatible con formatos como MP3 y MP4, incluyendo calidad ajustable.
- **Fácil de integrar**: Expone una API simple basada en REST para facilitar la integración con aplicaciones frontend.

## Requisitos

- **Node.js** (versión recomendada: 14 o superior)
- **npm** (generalmente incluido con Node.js)
- Acceso a Internet para conectarse a YouTube y obtener los enlaces de los videos.

## Instalación

1. **Clona el repositorio**:
    ```bash
    git clone https://github.com/tu-usuario/tu-repositorio.git
    cd tu-repositorio
    ```

2. **Instala las dependencias**:
    ```bash
    npm install
    ```

## Configuración

El backend utiliza la librería `ytdl-core` para obtener la información de los videos de YouTube. No requiere una configuración adicional más allá de instalar Node.js y las dependencias necesarias.

## Uso

Para iniciar el servidor, usa el siguiente comando:

```bash
node server.js
```

El servidor estará disponible en `http://localhost:3000`.

### Endpoints

#### `GET /getDirectUrl`

Obtiene un enlace directo de audio o video de un video de YouTube.

- **Parámetros de consulta (query params)**:
  - `videoUrl` (obligatorio): La URL del video de YouTube.
  - `format` (opcional): `mp3` para solo audio o `mp4` para video con audio.

- **Ejemplo de solicitud**:
    ```bash
    curl "http://localhost:3000/getDirectUrl?videoUrl=https://www.youtube.com/watch?v=WPNAy5EXGkI&format=mp3"
    ```

- **Respuesta**:
  - `directUrl`: Un enlace directo al flujo de audio o video.
  
  ```json
  {
    "directUrl": "https://rr1---sn-h5qzen7y.googlevideo.com/videoplayback?...&itag=251&source=youtube&..."
  }
  ```

### Ejemplo de Integración con el Frontend

El siguiente código muestra cómo llamar a este backend desde un frontend en JavaScript:

```javascript
async function obtenerEnlaceDirecto(videoUrl, format) {
    const response = await fetch(`http://localhost:3000/getDirectUrl?videoUrl=${encodeURIComponent(videoUrl)}&format=${format}`);
    const data = await response.json();
    return data.directUrl;
}
```

## Notas Importantes

- **Uso personal**: Este backend se recomienda solo para fines educativos o personales. Descargar contenido protegido por derechos de autor sin permiso está en contra de los términos de servicio de YouTube.
- **Limitaciones**: Algunos videos pueden tener restricciones de edad o derechos de autor que limitan el acceso a sus flujos de audio o video.
- **Errores de Formato**: En caso de errores como "No such format found", el backend intentará seleccionar el mejor formato disponible, pero podría no funcionar con todos los videos.

## Dependencias

- [`ytdl-core`](https://www.npmjs.com/package/ytdl-core): Librería para extraer información de videos de YouTube.

## Contribuciones

Las contribuciones son bienvenidas. Por favor, sigue los pasos del repositorio para abrir un *pull request*.

## Licencia

Este proyecto está disponible bajo la licencia MIT.

--- 
