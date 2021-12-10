const xScarto = 412;
const yScarto = 15;
import { positions } from '../helpers/position';

import { degrees, PDFDocument, rgb, StandardFonts } from 'pdf-lib';

export async function modifyPdf(data?: any): Promise<void> {
  const url = 'http://localhost:9500/modulo.pdf';
  const existingPdfBytes = await fetch(url).then(res => res.arrayBuffer());

  const pdfDoc = await PDFDocument.load(existingPdfBytes);
  const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);

  const pages = pdfDoc.getPages();
  const firstPage = pages[0];
  const { width, height } = firstPage.getSize();

  const p = positions(width, height);

  firstPage.drawText('x', {
    x: p.aire.x,
    y: p.aire.y,
    size: 15,
    font: helveticaFont,
    color: rgb(0, 0, 0),
  });

  firstPage.drawText('Catania', {
    x: p.aireState.x,
    y: p.aireState.y,
    size: 12,
    font: helveticaFont,
    color: rgb(0, 0, 0),
  });

  const pdfBytes = await pdfDoc.save();
  const pdfDataUri = await pdfDoc.saveAsBase64({ dataUri: true });

  if (document) {
    document?.body.innerHTML = `<iframe id='pdf' style="width: 100vw; height: 100vh;"></iframe>`;
    document.getElementById('pdf').src = pdfDataUri;
  }

  //   const pdfUrl = window.URL.createObjectURL(new Blob([pdfBytes.buffer]));
  //   const a = document.createElement('a');
  //   a.style.display = 'none';
  //   a.href = pdfUrl;
  //   a.download = 'modulo.pdf';
  //   document.body.appendChild(a);
  //   a.click();
  //   window.URL.revokeObjectURL(url);
}
