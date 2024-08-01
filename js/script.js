
// play youtube video
document.getElementById("video_play_button").addEventListener("click", () => {
  const yt_video = "https://www.youtube.com/embed/SWsv-bplne8?autoplay=1";

  // Show the video iframe
  document.getElementById("setup_video").style.display = "block";

  document.getElementById(
    "setup_video"
  ).innerHTML = `<iframe id="recommendation-video_set" title="Video" src="${yt_video}" allow="autoplay"></iframe>`;

  // Hide the preview image and play button
  document.getElementById("recommendation-preview").style.display = "none";
  document.getElementById("video_play_button").style.display = "none";
});


// add active class on select industry
const clickableItems = document.querySelectorAll('.setup-wizard__single-industry');

clickableItems.forEach(item => {
    item.addEventListener('click', function() {
        clickableItems.forEach(i => i.classList.remove('active'));
        this.classList.add('active');
    });
});
