# MMM-Slideshow
This module for the [MagicMirror](https://github.com/MichMich/MagicMirror) creates a simple slideshow.

## Installation
1. Navigate to the modules folder in your MagicMirror project
```bash
cd ~/MagicMirror/Modules
git clone https://github.com/bryngo/MMM-Slideshow.git

```

2. Add the following into the `modules` section of your `config/config.js` file:
```aidl
{
    module: 'MMM-Slideshow',
    position: "fullscreen_above",
},
```

3. Additional customization variables can be found in the `defaults` of `MMM-Slideshow.js` (e.g. `fadeSpeed` and `updateInterval`).

## Photo Customization

1. `slideshow_style.css` is used to make the images full screen. Additional photo styles can be placed here.

2. To add photos, place the photos in the `images` directory. Then, head over to `MMM-Slideshow.js` and add the file name(s) in the pictures variable.
```aidl
pictures: [
            "images/slide01.jpg",
            "images/slide02.jpg",
            "images/slide03.jpg",
            "images/slide04.jpg",
            "images/slide05.jpg"
            ...
],
```