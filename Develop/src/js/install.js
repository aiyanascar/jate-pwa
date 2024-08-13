const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
  console.log('beforeinstallprompt event fired');
  event.preventDefault();
  window.deferredPrompt = event;
  butInstall.classList.toggle('hidden', false);
  console.log('Install button should now be visible');
});

butInstall.addEventListener('click', async () => {
  console.log('Install button clicked');
  const promptEvent = window.deferredPrompt;
  if (!promptEvent) {
    console.log('No deferred prompt available');
    return;
  }
  promptEvent.prompt();
  const result = await promptEvent.userChoice;
  console.log('User choice:', result);
  window.deferredPrompt = null;
  butInstall.classList.toggle('hidden', true);
});

window.addEventListener('appinstalled', (event) => {
  console.log('App installed successfully!');
  window.deferredPrompt = null;
});
