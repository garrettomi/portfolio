
const BackgroundVideo = ({video, videoWebm}) => {

    return (
        <div className="bg-video">
        <video className="bg-video__content" autoPlay muted loop>
          <source src={video} type="video/mp4" />
          <source src={videoWebm} type="video/webm" />
          Your browser is not supported!
        </video>
        </div>
    );
};

export default BackgroundVideo;