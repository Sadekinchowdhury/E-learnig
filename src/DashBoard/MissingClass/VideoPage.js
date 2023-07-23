import React from "react";

const VideoPage = () => {
  // Replace this YouTube video ID with the ID of the video you want to display
  const youtubeVideoId = "wm5gMKuwSYk";


    return (
        <div className="container mx-auto p-4">
          <div className="w-full">
            {/* Styled Video Box */}
            <div className="relative w-full pb-9/16">
              <iframe
                title="YouTube Video"
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${youtubeVideoId}`}
                allowFullScreen
              />
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