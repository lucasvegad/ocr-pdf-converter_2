export const metadata = {
  title: 'OCR PDF Converter — Herramienta gratuita para abogados | Lucas Vega',
  description: 'Convierte PDFs escaneados en documentos searchable con OCR de Google Cloud Vision. Herramienta gratuita creada por Lucas Vega, Abogado Tech. Open source.',
  openGraph: {
    title: 'OCR PDF Converter — PDFs escaneados a searchable en segundos',
    description: 'Herramienta gratuita para convertir PDFs escaneados en documentos searchable. OCR con Google Cloud Vision. Sin almacenar datos. Open Source.',
    type: 'website',
    siteName: 'OCR PDF Converter',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OCR PDF Converter — Herramienta gratuita para abogados',
    description: 'Convierte PDFs escaneados en searchable con Google Vision OCR. Gratis y open source.',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  )
}
