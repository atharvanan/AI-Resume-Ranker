const pdfParse = require('pdf-parse');

async function extractTextFromPdf(buffer) {
  try {
    const data = await pdfParse(buffer);
    return data.text || '';
  } catch (error) {
    console.error('PDF Parse Error:', error);
    return '';
  }
}

module.exports = {
  extractTextFromPdf
};
