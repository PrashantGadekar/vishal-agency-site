'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const IntroducingUs = () => {
  const controls = useAnimation();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const [activeVideo, setActiveVideo] = useState(null);
  const [playingVideos, setPlayingVideos] = useState({});
  const videoRefs = useRef([]);

  // Sample video data - with local video files
  const videos = [
    {
      id: 1,
      title: 'Creative Process',
      url: 'https://www.youtube.com/watch?v=/o89K4MLpK1c',
      // url: '/videos/creative-process.mp4', // Local video path in public folder
      direction: 'left',
    },
    {
      id: 2,
      title: 'Client Success Stories',
      url: '/videos/client-stories.mp4', // Local video path
      direction: 'right',
    },
    {
      id: 3,
      title: 'Behind the Scenes',
      url: '/videos/behind-scenes.mp4', // Local video path
      direction: 'left',
    },
    {
      id: 4,
      title: 'Team Showcase',
      url: '/videos/team-showcase.mp4', // Local video path
      direction: 'right',
    },
  ];

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
      
      // Auto-play all videos when section comes into view
      videoRefs.current.forEach((video, index) => {
        if (video) {
          // Set all videos to playing state
          setPlayingVideos(prev => ({
            ...prev,
            [index]: true
          }));
          
          // Ensure videos play with muted state to comply with autoplay policies
          video.muted = true;
          video.play().catch(e => console.log("Autoplay failed on scroll:", e));
        }
      });
    }
  }, [isInView, controls]);

  // Handle video playback
  const handleVideoClick = (index) => {
    // For YouTube videos, use the modal approach
    if (videos[index].url.includes('youtube')) {
      setActiveVideo(index);
    } else {
      // For local videos, toggle play state directly in the thumbnail
      setPlayingVideos(prev => ({
        ...prev,
        [index]: !prev[index]
      }));
    }
  };

  const closeVideo = () => {
    setActiveVideo(null);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  // Variants for left/right animation
  const videoVariants = {
    hiddenLeft: { x: -100, opacity: 0 },
    hiddenRight: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section ref={sectionRef} id="introducing-us" className="py-20 md:py-32 bg-black overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="space-y-10"
        >
          {/* Section Heading */}
          <div className="space-y-3 text-center">
            <motion.p variants={itemVariants} className="uppercase text-blue-400 tracking-wider font-medium">
              OUR STORY
            </motion.p>
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-white">
              INTRODUCING US
            </motion.h2>
            <motion.p variants={itemVariants} className="text-gray-400 max-w-3xl mt-4 mx-auto">
              We specialize in transforming everyday recordings into powerful, 
              story driven videos that perfectly match your brand identity 
              helping your content cut through the noise and make a lasting impact online.
            </motion.p>
          </div>
          
          {/* Videos Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-0 gap-y-8 px-4 max-w-2xl mx-auto">
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                variants={{
                  hidden: video.direction === 'left' ? videoVariants.hiddenLeft : videoVariants.hiddenRight,
                  visible: videoVariants.visible
                }}
                initial="hidden"
                animate={controls}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative cursor-pointer overflow-hidden rounded-xl bg-gray-900 shadow-xl w-full max-w-[280px] mx-auto"
                onClick={() => handleVideoClick(index)}
              >
                <div className="aspect-[9/16] relative w-full">
                  {!playingVideos[index] ? (
                    <>
                      <video 
                        src={video.url}
                        className="w-full h-full object-cover"
                        preload="metadata"
                        muted
                        playsInline
                        ref={el => {
                          // Set the currentTime to 0 to show the first frame
                          if (el) {
                            el.currentTime = 0;
                            videoRefs.current[index] = el;
                          }
                        }}
                      ></video>
                      
                      {/* Play button overlay */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-all duration-300">
                        <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                          <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
                            <svg 
                              xmlns="http://www.w3.org/2000/svg" 
                              viewBox="0 0 24 24" 
                              fill="currentColor" 
                              className="w-6 h-6 text-white"
                            >
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    // Video player that plays automatically
                    <video 
                      src={video.url}
                      className="w-full h-full object-cover"
                      controls
                      autoPlay={true}
                      muted={true}
                      playsInline
                      loop
                      onClick={(e) => e.stopPropagation()}
                      ref={el => {
                        if (el) {
                          videoRefs.current[index] = el;
                          el.play().catch(e => console.log("Autoplay failed:", e));
                        }
                      }}
                    ></video>
                  )}
                </div>
                
                <div className="p-4 bg-gray-900">
                  <h3 className="font-medium text-xl text-white">{video.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Video Modal */}
          {activeVideo !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
              onClick={closeVideo}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="relative w-full max-w-4xl max-h-[90vh] aspect-[9/16]"
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  className="absolute -top-12 right-0 text-white p-2 z-10"
                  onClick={closeVideo}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                  </svg>
                </button>
                <iframe
                  src={videos[activeVideo]?.url + (videos[activeVideo]?.url.includes('?') ? '&' : '?') + 'autoplay=1'}
                  title={videos[activeVideo]?.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ display: videos[activeVideo]?.url.includes('youtube') ? 'block' : 'none' }}
                ></iframe>
                <video 
                  src={videos[activeVideo]?.url}
                  className="w-full h-full"
                  controls
                  autoPlay={true}
                  playsInline
                  muted={false}
                  loop
                  style={{ display: !videos[activeVideo]?.url.includes('youtube') ? 'block' : 'none' }}
                  ref={el => {
                    if (el) {
                      el.play().catch(e => console.log("Modal autoplay failed:", e));
                    }
                  }}
                ></video>
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default IntroducingUs;
