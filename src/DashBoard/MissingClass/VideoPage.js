import React from "react";

const VideoPage = () => {
  // Replace this YouTube video ID with the ID of the video you want to display
  const youtubeVideoId = "wm5gMKuwSYk";

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-row items-center">
        <div className="relative w-full pb-9/16">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/dTFXufTgfOE"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      {/* Download Button */}
      <div className="mt-4">
        <a
          href="YOUR_DOWNLOAD_LINK"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Download Video
        </a>
      </div>
    </div>
  );
};

export default VideoPage;
