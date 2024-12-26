// QR код үүсгэгч ашиглах
const generateQRCode = (id, url) => {
    const canvas = document.getElementById(id);
    const QRCode = require('qrcode');
  
    QRCode.toCanvas(canvas, url, (error) => {
      if (error) console.error(error);
      console.log('QR код үүсгэгдлээ:', url);
    });
  };
  
  // Каталогийн QR кодыг үүсгэх
  generateQRCode('qrcode1', 'https://tanai-site.mn/product/1');
  generateQRCode('qrcode2', 'https://tanai-site.mn/product/2');
  