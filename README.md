# MMM-Slideshow
This module for the [MagicMirror](https://github.com/MichMich/MagicMirror) creates a simple slideshow.

## Installation
1. Navigate to the modules folder in your MagicMirror project
```bash
cd ~/MagicMirror/modules
git clone https://github.com/bryngo/MMM-Slideshow.git

```

2. Add the following into the `modules` section of your `config/config.js` file:
```aidl
{
    module: 'MMM-Slideshow',
    position: 'fullscreen_above',
    config: {
        pictures: [
            "images/slide01.jpg",
            "images/slide02.jpg",
            "images/slide03.jpg",
            "images/slide04.jpg",
            "images/slide05.jpg"
        ]
    }
},
```

## Config Options

| **Option** | **Default** | **Description** |
| --- | --- | --- |
| `pictures` | ["images/slide01.jpg", "images/slide02.jpg", "images/slide03.jpg", "images/slide04.jpg", "images/slide05.jpg"] | Array of image pool to display. |
| `updateInterval` | 10000 | How long a picture should be displayed in milliseconds. |
| `fadeSpeed` | 2000 | How long should the transition between two images be in milliseconds. |
| `random` | true | Display pictures randomly or in the order they are defined. |

## Photo Customization

1. `slideshow_style.css` is used to make the images full screen. Additional photo styles can be placed in the `css/custom.css` file.

2. To add photos, place the photos in the `images` directory. Then, head over to the config file `config/config.js` and add the file name(s) in the pictures config option as in the example above.
