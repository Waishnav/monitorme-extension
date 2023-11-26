// Wait for the message from the extension to replay.
// You can also provide static content via the HTML page
// or have a different workflow around the events.
/* eslint-disable no-undef */

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  // localStorage.setItem('recording', request);
  main(request);
});

async function main(request) {
  // const recording = JSON.parse(localStorage.getItem('recording'));
  console.log('recording', request);
  const rawScript = JSON.parse(request)
  const scriptContent = encodeURIComponent(JSON.stringify(rawScript, null, 2))
  const testType = document.getElementById("testType").value;

  // redirect to darshan 
  const url = `http://localhost:3001/dashboard/synthetic-monitors?JsonScript=${scriptContent}&testType=${testType}`

  // chrome.tabs.create({ url, active: true });
  document.getElementById("redirect-btn").setAttribute("href", url)
}
