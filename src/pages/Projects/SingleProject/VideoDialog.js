import React from 'react';

const VideoDialog = ({link}) => {
    return (
        <div>
            <iframe className={"w-full p-8 h-96"} src={link}
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>

            </iframe>
        </div>
    );
};

export default VideoDialog;