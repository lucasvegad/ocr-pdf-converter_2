# 🔍 OCR PDF Converter

Herramienta web gratuita que convierte PDFs escaneados en documentos searchable (con texto seleccionable y buscable) usando Google Cloud Vision OCR.

---

## ¿Qué problema resuelve?

Si trabajás con documentos legales, administrativos o judiciales escaneados, sabés que no podés buscar texto dentro de ellos. Esta herramienta toma esos PDFs, detecta qué páginas son imágenes, les aplica OCR con Google Cloud Vision, y genera un nuevo PDF donde podés buscar, seleccionar y copiar texto.

## ¿Cómo funciona?

1. **Subís tu PDF** — arrastrando o seleccionando el archivo
2. **Análisis automático** — detecta qué páginas ya tienen texto (las preserva) y cuáles son imágenes escaneadas
3. **OCR con Google Cloud Vision** — procesa solo las páginas que lo necesitan
4. **Descarga** — genera un PDF searchable listo para usar

## Requisitos

Necesitás una API Key gratuita de Google Cloud con Cloud Vision API habilitada.

### Obtener tu API Key (5 minutos)

1. Andá a [aistudio.google.com/app/apikey](https://aistudio.google.com/app/apikey) e iniciá sesión con tu cuenta de Google
2. Hacé click en **"Crear clave de API"** (o "Create API key"), poné un nombre y creá un proyecto nuevo
3. Andá a [Cloud Console → Vision API](https://console.cloud.google.com/apis/library/vision.googleapis.com) y hacé click en **Habilitar** para el mismo proyecto
4. Copiá la API key (empieza con `AIza...`) y pegala en la herramienta

> 💡 **Gratis:** Google Cloud Vision ofrece 1,000 llamadas/mes sin costo. Un PDF de 30 páginas con 15 escaneadas usa solo 15 llamadas. Te alcanza para ~66 PDFs/mes sin pagar nada.

## Limitaciones

- **Tamaño recomendado:** Hasta 50 páginas. PDFs más largos funcionan pero pueden tardar varios minutos.
- **Cuota:** 1,000 llamadas gratis/mes. Cada página escaneada = 1 llamada. Las páginas con texto existente NO consumen cuota.
- **Precisión:** Depende de la calidad del escaneo. Documentos borrosos, con manchas o escritos a mano pueden tener errores.
- **Texto superpuesto:** Funcional para búsqueda y selección, pero no tiene posicionamiento pixel-perfect.
- **Conexión:** Requiere internet para las llamadas a Google Cloud Vision. El PDF final se genera localmente.

## Privacidad y seguridad

- **Tu API key nunca se almacena** en ningún servidor. Se usa únicamente en tu navegador durante la sesión.
- **Tus archivos no se suben a ningún servidor propio.** Las imágenes se envían directamente desde tu navegador a Google Cloud Vision.
- **El PDF final se genera localmente** en tu navegador.
- No hay backend, base de datos, ni tracking.

## Stack técnico

- **Next.js 14** — framework web
- **pdf.js** — lectura y renderizado de PDFs
- **Google Cloud Vision API** — reconocimiento óptico de caracteres
- **jsPDF** — generación del PDF con capa de texto invisible
- **Vercel** — hosting

## Desarrollo local

```bash
git clone https://github.com/tu-usuario/ocr-pdf-converter.git
cd ocr-pdf-converter
npm install
npm run dev
```

Abrí `http://localhost:3000` en tu navegador.

## Deploy en Vercel

1. Hacé fork de este repositorio
2. Andá a [vercel.com/new](https://vercel.com/new)
3. Importá el repo desde GitHub
4. Click en Deploy

No se necesitan variables de entorno. La API key la ingresa cada usuario en el navegador.

## Autor

**Lucas Vega** — Abogado Tech · Montecarlo, Misiones 🇦🇷

- [Portfolio](https://www.lucasvega.com/)
- [LinkedIn](https://www.linkedin.com/in/abogadolucasvega/)

Herramienta gratuita para la comunidad legal.

## Licencia

MIT
