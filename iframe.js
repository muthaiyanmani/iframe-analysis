// Iframe message listener
window.onmessage = (e) => {
    const origin = "https://48ed8904-3cac-4a4e-88b0-f287fe4a0942.id.repl.co";
  
    // Filter event by origin
    if (e.origin === origin) {
      console.log("💌 Message from PARENT 🙋‍♂️ ::", e.data);
    }
  }
  
  window.onload = () => {
    console.log("🟠 Iframe loaded");
    parent.window.postMessage("Hello 👋🏻 I'm Iframe!", "*");
  }