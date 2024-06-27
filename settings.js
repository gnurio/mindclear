document.getElementById('save-settings-button').addEventListener('click', () => {
    const integration = document.getElementById('integration').value;
    chrome.storage.sync.set({integration}, () => {
      console.log('Integration setting saved:', integration);
    });
  });
  
  // Load and display saved settings when the settings page is opened
  chrome.storage.sync.get(['integration'], (result) => {
    if (result.integration) {
      document.getElementById('integration').value = result.integration;
    }
  });