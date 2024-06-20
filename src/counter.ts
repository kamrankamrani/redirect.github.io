export function redirect(
  element: HTMLButtonElement,
  os: "IOS" | "Android" | "windows/mac"
) {
  element.addEventListener("click", () => {
    console.log("clicked!!", os);
    if (os === "Android") {
      window.location.href =
        "https://play.google.com/store/apps/details?id=com.arvato.myafterpay";
    } else if (os === "IOS") {
      window.location.href =
        "https://apps.apple.com/de/app/riverty-is-the-new-afterpay/id1526144570?l=en-GB";
    } else {
      window.location.href = "https://our.riverty.com/";
    }
  });
}
