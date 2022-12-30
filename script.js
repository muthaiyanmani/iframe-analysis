// Parent message listener
window.onmessage = (e) => {
    const origin = "https://48ed8904-3cac-4a4e-88b0-f287fe4a0942.id.repl.co";
  
    // Filter event by origin
    if (e.origin === origin) {
      console.log("💌 Message from IFRAME 👶 ::", e.data);
    }
  }
  
  window.onload = () => console.log("🟠 Parent Loaded..")
  
  const iframe = document.querySelector('iframe');
  
  iframe.onload = () => {
    // Sending message to iframe
    iframe.contentWindow.postMessage("Hello 👋🏻 I'm Parent!", "*")
  }