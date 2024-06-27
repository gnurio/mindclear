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
    alert('Settings page not implemented yet.');
  });
  
  document.getElementById('model-selection').addEventListener('change', (event) => {
    const selectedModel = event.target.value;
    console.log('Selected model:', selectedModel);
  });
  
  document.getElementById('context-button').addEventListener('click', () => {
    document.getElementById('context-modal').style.display = "block";
  });
  
  document.querySelector('.close-button').addEventListener('click', () => {
    document.getElementById('context-modal').style.display = "none";
  });
  
  document.getElementById('save-context-button').addEventListener('click', () => {
    const contextInput = document.getElementById('context-input').value;
    chrome.storage.sync.set({customContext: contextInput}, () => {
      console.log('Custom context saved:', contextInput);
      document.getElementById('context-modal').style.display = "none";
    });
  });
  
  // Load and display saved context when the extension is opened
  chrome.storage.sync.get(['customContext'], (result) => {
    if (result.customContext) {
      document.getElementById('context-input').value = result.customContext;
    }
  });

  // Existing event listeners...

document.getElementById('send-button').addEventListener('click', () => {
    const chatInput = document.getElementById('chat-input');
    const chatWindow = document.getElementById('chat-window');
  
    const message = chatInput.value;
    if (message) {
      const messageElement = document.createElement('div');
      messageElement.textContent = message;
      chatWindow.appendChild(messageElement);
  
      // Save message to conversation history
      chrome.storage.sync.get(['conversationHistory'], (result) => {
        const history = result.conversationHistory || [];
        history.push(message);
        chrome.storage.sync.set({conversationHistory: history});
      });
  
      chatInput.value = '';
    }
  });
  
  // Load and display conversation history when the extension is opened
  chrome.storage.sync.get(['conversationHistory'], (result) => {
    const chatWindow = document.getElementById('chat-window');
    const history = result.conversationHistory || [];
    history.forEach(message => {
      const messageElement = document.createElement('div');
      messageElement.textContent = message;
      chatWindow.appendChild(messageElement);
    });
  });
  
  // Summarization function (placeholder)
  function summarizeConversation(history) {
    return `Summary of conversation: ${history.join(' ')}`;
  }
  
  // Display summary when the extension is opened
  chrome.storage.sync.get(['conversationHistory'], (result) => {
    const summariesDiv = document.getElementById('summaries');
    const history = result.conversationHistory || [];
    if (history.length > 0) {
      const summary = summarizeConversation(history);
      const summaryElement = document.createElement('div');
      summaryElement.textContent = summary;
      summariesDiv.appendChild(summaryElement);
    }
  });