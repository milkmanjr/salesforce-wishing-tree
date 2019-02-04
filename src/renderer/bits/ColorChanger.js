export default {
    change: (color) => {
        // colorspace is RGBAW (red, green, blue, amber, white)
        var colorValues = ""
        switch (color) {
            case "service":
                colorValues = [127, 0, 76, 0, 0]
                break;
            case "platform":
                colorValues = [17, 6, 69, 0, 0]
                break;
            case "sales":
                colorValues = [12, 107, 127, 0, 0]
                break;
            case "commerce":
                colorValues = [34, 118, 0, 0, 0]
                break;
            case "marketing":
                colorValues = [147, 98, 0, 0, 0]
                break;
            default:
            case "off":
                colorValues = [0, 0, 0, 0, 0]
                break;
        }
        var artnet = require('artnet')({host: process.env.parentIP});
        artnet.set(colorValues, (err, res) => {
            if (err) {
                console.log('there has been an error: ', err)
            } else {
                console.log('changed color to =>', color, colorValues, 'ip =>', process.env.parentIP);
                artnet.close()
            }
        })
    }
};