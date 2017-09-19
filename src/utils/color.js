const addLight = function (color, amount) {
    let cc = parseInt(color, 16) + amount;
    let c = (cc > 255)
        ? 255
        : (cc);
    c = (c.toString(16).length > 1)
        ? c.toString(16)
        : `0${c.toString(16)}`;
    return c;
}

const lighten = (color, amount) => {
    color = (color.indexOf("#") >= 0)
        ? color.substring(1, color.length)
        : color;
    amount = parseInt((255 * amount) / 100, 10);
    return color = `#${addLight(color.substring(0, 2), amount)}${addLight(color.substring(2, 4), amount)}${addLight(color.substring(4, 6), amount)}`;
}

const palette = {
    dark_primary: '#2c3e50',
    dark_secondary: '#34495e',
    light_primary: '#ecf0f1',
    light_secondary: '#bdc3c7',
    grey_darker: '#7f8c8d',
    grey_lighter: '#95a5a6',
    primary: '#c0392b',
    accent: '#03a9f4',
    dark: '#BF6A21',
    light: '#ECE5B3',
    background: '#f3f3e8'
}

export {addLight, lighten, palette};