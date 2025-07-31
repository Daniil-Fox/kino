// Компонент для работы с видео
class VideoController {
  constructor() {
    this.init();
  }

  init() {
    this.initPlayButtonVideos();
    this.initBackgroundVideos();
  }

  // Инициализация видео с кнопкой плей
  initPlayButtonVideos() {
    const videoWrappers = document.querySelectorAll(".video-wrapper");

    videoWrappers.forEach((wrapper) => {
      const video = wrapper.querySelector("video");
      const playButton = wrapper.querySelector(".video-play");

      if (!video || !playButton) return;

      // Скрываем controls по умолчанию
      video.controls = false;

      // Обработчик клика по кнопке плей
      playButton.addEventListener("click", () => {
        this.playVideo(video, wrapper);
      });

      // Обработчики событий видео
      video.addEventListener("play", () => {
        this.onVideoPlay(video, wrapper);
      });

      video.addEventListener("pause", () => {
        this.onVideoPause(video, wrapper);
      });

      video.addEventListener("ended", () => {
        this.onVideoEnded(video, wrapper);
      });
    });
  }

  // Инициализация фоновых видео с автовоспроизведением
  initBackgroundVideos() {
    const backgroundVideos = document.querySelectorAll(
      ".video-wrapper--background"
    );

    backgroundVideos.forEach((wrapper) => {
      const video = wrapper.querySelector("video");

      if (!video) return;

      // Настройки для фонового видео
      video.muted = true;
      video.loop = true;
      video.controls = false;
      video.playsInline = true;

      // Создаем Intersection Observer для отслеживания видимости
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              video.play().catch((error) => {
                console.log(
                  "Автовоспроизведение заблокировано браузером:",
                  error
                );
              });
            } else {
              video.pause();
            }
          });
        },
        {
          threshold: 0.1, // Видео считается видимым, если 10% его площади видно
          rootMargin: "50px", // Небольшой запас для плавности
        }
      );

      observer.observe(wrapper);
    });
  }

  // Воспроизведение видео
  playVideo(video, wrapper) {
    video
      .play()
      .then(() => {
        // Видео успешно запущено
      })
      .catch((error) => {
        console.log("Ошибка воспроизведения видео:", error);
      });
  }

  // Обработчик начала воспроизведения
  onVideoPlay(video, wrapper) {
    const playButton = wrapper.querySelector(".video-play");
    if (playButton) {
      playButton.style.display = "none";
    }

    // Показываем controls
    video.controls = true;
  }

  // Обработчик паузы
  onVideoPause(video, wrapper) {
    const playButton = wrapper.querySelector(".video-play");
    if (playButton) {
      playButton.style.display = "block";
    }

    // Скрываем controls
    video.controls = false;
  }

  // Обработчик окончания видео
  onVideoEnded(video, wrapper) {
    const playButton = wrapper.querySelector(".video-play");
    if (playButton) {
      playButton.style.display = "block";
    }

    // Скрываем controls
    video.controls = false;
  }
}

// Инициализация компонента при загрузке DOM
document.addEventListener("DOMContentLoaded", () => {
  new VideoController();
});

export default VideoController;
