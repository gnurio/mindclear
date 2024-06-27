document.getElementById('send-button').addEventListener('click', () => {
    const chatInput = document.getElementById('chat-input');
    const chatWindow = document.getElementById('chat-window');
  
    const message = chatInput.value;
    if (message) {
      const messageElement = document.createElement('div');
      messageElement.textContent = message;
      chatWindow.appendChild(messageElement);
      chatInput.value = '';
    }
  });
  
  document.getElementById('settings-button').addEventListener('click', () => {
    // Open settings page or popup
    alert('Settings page not implemented yet.');
  });
  
  document.getElementById('model-selection').addEventListener('change', (event) => {
    const selectedModel = event.target.value;
    console.log('Selected model:', selectedModel);
    // Handle model selection change
  });