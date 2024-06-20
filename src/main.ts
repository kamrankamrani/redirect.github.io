import "./style.css";
import { redirect } from "./counter.ts";
import androidLogo from "./android.svg";
import iosLogo from "./ios.svg";
import desktopLogo from "./desktop.svg";

const userAgent = window.navigator.userAgent;

let platform: "IOS" | "Android" | "windows/mac" = "windows/mac";
let logoPath: string = "";

if (/android/i.test(userAgent)) {
  console.log("This is Android");
  platform = "Android";
  logoPath = androidLogo;
  // Add your Android specific code here
} else if (
  /iPad|iPhone|iPod/.test(userAgent) &&
  !Object.prototype.hasOwnProperty.call(window, "MSStream")
) {
  console.log("This is iOS");
  platform = "IOS";
  logoPath = iosLogo;
  // Add your iOS specific code here
} else {
  platform = "windows/mac";
  logoPath = desktopLogo;
}

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${logoPath}" class="logo" alt="Vite logo" />
    </a>
    <h1>Click to redirect!</h1>
    <div class="card">
      <button id="counter" type="button">Click Me</button>
    </div>
    <p class="read-the-docs">
      ${platform}
    </p>
  </div>
`;

redirect(document.querySelector<HTMLButtonElement>("#counter")!, platform);
