
Module.register("MMM-Slideshow", {
    // Default module config

    defaults: {
        text: "This is my slideshow!",

        pictures: [
            "images/slide01.jpg",
            "images/slide02.jpg",
            "images/slide03.jpg",
            "images/slide04.jpg",
            "images/slide05.jpg"
        ],

        // 1000 ms = 1s
        updateInterval: 10000,
        fadeSpeed: 2000
    },

    getStyles: function() {
       return ["slideshow_style.css"];
    },

    start: function() {
       // Log.info("Starting module: " + this.name);

        // Schedule update timer.

        var self = this;

        setInterval(function() {
            self.updateDom(self.config.fadeSpeed);
        }, this.config.updateInterval);

    },

    getDom: function() {

        max = 4;
        min = 0;

        var wrapper = document.createElement("div");

        var image = document.createElement("img");
        image.className = "slide";
        image.src = this.data.path + this.config.pictures[Math.floor(Math.random() * 5)];

        wrapper.appendChild(image);

        return wrapper;
    }
});