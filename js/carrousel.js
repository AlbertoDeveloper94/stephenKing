const banner = document.querySelector("#bannerStephenKing");
      const videoPlayer = document.querySelector("#video");
      const videosSrc = [
        { src: "itMovie.mp4", poster: "itPoster.jpg" },
        { src: "largaMarchaMovie.mp4", poster: "longWalkPoster.jpg" },
      ];
      const prevButton = document.querySelector("#buttonPrev");
      const nextButton = document.querySelector("#buttonNext");
      let currentIndex = 0;

      prevButton.addEventListener("click", function () {
        currentIndex--;
        controlSlide();
      });
      nextButton.addEventListener("click", function () {
        currentIndex++;
        controlSlide();
      });

      function controlSlide() {
        videoPlayer.style.opacity = 0;
        banner.style.opacity = 0;
        if (currentIndex < 0) {
          currentIndex = videosSrc.length - 1;
        }
        if (currentIndex > videosSrc.length - 1) {
          currentIndex = 0;
        }

        setTimeout(() => {
          videoPlayer.pause();
          videoPlayer.poster = videosSrc[currentIndex].poster;

          videoPlayer.src = videosSrc[currentIndex].src;
          videoPlayer.style.opacity = 1;
          banner.style.opacity = 1;
        }, 1000);
      }
      