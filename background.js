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
      // Use the token to authenticate with your backend
    });
  }
  
  chrome.action.onClicked.addListener((tab) => {
    handleGoogleSignIn();
  });
  