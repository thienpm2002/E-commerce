function generateAvatar(name, options = {}) {
  const {
    size = 128,
    background = "random",
    color = "fff",
    rounded = true,
    length = 2,
    bold = true,
  } = options;

  const safeName = encodeURIComponent(name);

  return `https://ui-avatars.com/api/?name=${safeName}&size=${size}&background=${background}&color=${color}&length=${length}&rounded=${rounded}&bold=${bold}`;
}

export default generateAvatar;
