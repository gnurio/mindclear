chrome.runtime.onInstalled.addListener(() => {
    console.log('Extension installed');
  });
  
  // Function to handle Google Sign-In
  function handleGoogleSignIn() {
    chrome.identity.getAuthToken({interactive: true}, (token) => {
      if (chrome.runtime.lastError || !token) {
        console.error('Google Sign-In failed:', chrome.runtime.lastError);
        return;
      }
      console.log('Google Sign-In successful, token:', token);
  
      // Get user information
      fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
        headers: { 'Authorization': `Bearer ${token}` }
      })
      .then(response => response.json())
      .then(userInfo => {
        console.log('User info:', userInfo);
        // Store user info securely, e.g., in chrome.storage
        chrome.storage.sync.set({ userInfo });
      })
      .catch(error => {
        console.error('Failed to fetch user info:', error);
      });
    });
  }
  
  chrome.action.onClicked.addListener((tab) => {
    handleGoogleSignIn();
  });