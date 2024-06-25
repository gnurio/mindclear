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
  