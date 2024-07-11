document.addEventListener("DOMContentLoaded", function () {
  const videos = [
    "pickle-rick-rick-and-morty-remix.mp4",
    "movie (1).mp4",
    "movie.mp4",
    "hahaha.mp4",
    "Video by sxltafa [CpKU1g2DrHw].mp4",
    "simplescreenrecorder-2021-05-23_20.12.19.mp4",
    "Farid-Bhai-Phone.mp4",
  ];

  const randomIndex = Math.floor(Math.random() * videos.length);
  const selectedVideo = videos[randomIndex];

  console.log("Selected video:", selectedVideo); // Debugging log

  const videoContainer = document.getElementById("videoContainer");

  if (videoContainer) {
    videoContainer.innerHTML = `
      <video class="solid" width="400" controls>
        <source src="../../videos/${selectedVideo}" type="video/mp4" />
      </video>
    `;
  } else {
    console.error("Video container not found!"); // Error log
  }
});
