function copyText(divNumber) {
    const divContent = document.querySelector(`.div-box:nth-child(${divNumber}) .div-content`);
    const textArea = document.createElement('textarea');
    textArea.value = divContent.innerText;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy'); 
    alert("Code Coped!")
    document.body.removeChild(textArea);
  }
  
  function shareOnWhatsApp(divNumber) {
    const divContent = document.querySelector(`.div-box:nth-child(${divNumber}) .div-content`).innerText;
    const encodedText = encodeURIComponent(divContent);
    const shareLink = `https://api.whatsapp.com/send?text=${encodedText}`;
    window.open(shareLink, '_blank');
  }
  
  function shareText(divNumber) {
    const divContent = document.querySelector(`.div-box:nth-child(${divNumber}) .div-content`).innerText;
    if (navigator.share) {
      navigator.share({
        title: `Shared from Div ${divNumber}`,
        text: divContent
      }).then(() => {
        console.log('Shared successfully.');
      }).catch((error) => {
        console.error('Error sharing:', error);
      });
    } else {
      alert("Sharing not supported on this device.");
    }
  }