const hexInput = document.getElementById("hexInput");
const inputColor = document.getElementById("inputColor");
const sliderText = document.getElementById("sliderText");
const slider = document.getElementById("slider");

hexInput.addEventListener("keyup", () => {
  const hex = hexInput.value;
  if (!isValid(hex)) return;

  const strippedHex = hex.replace("#", "");

  inputColor.style.backgroundColor = "#" + strippedHex;
});

const isValidHex = (hex) => {
  if (!hex) return false;

  const strippedHex = hex.replace("#", "");
  return strippedHex.length === 3 || strippedHex.length === 6;
  // if (hex.startsWith("#")) {
  //   const strippedHex = hex.substring(1);
  // }
};

// console.log(isValidHex("#000000"));
// console.log(isValidHex("#0000000"));
const convertHexToRGB = (hex) => {
  if (!isValidHex(hex)) return null;

  let strippedHex = hex.replace("#", "");

  if (strippedHex.length === 3) {
    strippedHex =
      strippedHex[0] +
      strippedHex[0] +
      strippedHex[1] +
      strippedHex[1] +
      strippedHex[2] +
      strippedHex[2];
  }
  const r = parseInt(strippedHex.substring(0, 2), 16);
  const g = parseInt(strippedHex.substring(2, 4), 16);
  const b = parseInt(strippedHex.substring(4, 6), 16);

  return { r, g, b };
};

const convertRGBToHex = (r, g, b) => {
  const firstPair = ("0" + r.ToString(16)).slice(-2);
  const secondPair = ("0" + g.ToString(16)).slice(-2);
  const thirdPair = ("0" + b.ToString(16)).slice(-2);

  const hex = "#" + firstPair + secondPair + thirdPair;
  return hex;
};

slider.addEventListener("input", () => {
  console.log(slider.value);
  // sliderText.textContent = `${slider.value}%`;
});
