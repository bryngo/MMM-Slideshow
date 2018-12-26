Module.register("MMM-Slideshow", {
    // Default module config
    defaults: {
        pictures: [
            "images/slide01.jpg",
            "images/slide02.jpg",
            "images/slide03.jpg",
            "images/slide04.jpg",
            "images/slide05.jpg"
        ],

        // 1000 ms = 1s
        updateInterval: 10000,
        fadeSpeed: 2000,
        random: true
    },

    currentIndex: 0,

    getStyles: function() {
       return ["slideshow_style.css"];
    },

    start: function() {
        Log.info("Starting module: " + this.name);

        setInterval(() => {
            this.updateDom(this.config.fadeSpeed);
        }, this.config.updateInterval);
    },

    getNextPictureSrc() {
        if (this.config.random === true) {
			return this.config.pictures[Math.floor(Math.random() * this.config.pictures.length)];
        } else {
            if (this.currentIndex >= this.config.pictures.length) {
                this.currentIndex = 0;
            }

            return this.config.pictures[this.currentIndex++];
        }
    },

    getDom: function() {
        var wrapper = document.createElement("div");

        var image = document.createElement("img");
        image.classList.add("slide");
        image.src = this.file(this.getNextPictureSrc());

        wrapper.appendChild(image);

        return wrapper;
    }
});