document.getElementById("video_play_button").addEventListener("click", () => {
  console.log("clicked");
  const yt_video = "https://www.youtube.com/embed/SWsv-bplne8?autoplay=1";

  // Show the video iframe
  document.getElementById("setup_video").style.display = "block";

  // Set the iframe source with the correct attributes
  document.getElementById(
    "setup_video"
  ).innerHTML = `<iframe id="recommendation-video_set" title="Video" src="${yt_video}" allow="autoplay"></iframe>`;

  // Hide the preview image and play button
  document.getElementById("recommendation-preview").style.display = "none";
  document.getElementById("video_play_button").style.display = "none";
});
