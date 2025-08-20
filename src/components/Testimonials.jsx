'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const videoRefs = useRef([]);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });
  const controls = useAnimation();
  const [videoDurations, setVideoDurations] = useState([]);
  const [autoplayEnabled, setAutoplayEnabled] = useState(true);
  const [userInteracted, setUserInteracted] = useState(false);
  
  // Testimonial data with video and quote information
  const testimonials = [
    {
      id: 1,
      name: "",
      position: "CEO, TechInnovate",
      videoUrl: "/videos/video-01.mp4", // Make sure this file exists in public/videos/
      quote: "Working with this team transformed our digital presence. The results exceeded our expectations!",
      highlight: "transformed our digital presence"
    },
    {
      id: 2,
      name: "",
      position: "Marketing Director, BrandElevate",
      videoUrl: "/videos/video-02.mp4", // Make sure this file exists in public/videos/
      quote: "The content strategy they developed doubled our engagement rates within just two months.",
      highlight: "doubled our engagement rates"
    },
    {
      id: 3,
      name: "",
      position: "Founder, GrowthHub",
      videoUrl: "/videos/video-03.mp4", // Make sure this file exists in public/videos/
      quote: "Their creative approach to video production helped us stand out in a crowded market.",
      highlight: "helped us stand out"
    },
    {
      id: 4,
      name: "",
      position: "Content Creator",
      videoUrl: "/videos/video-04.mp4", // Make sure this file exists in public/videos/
      quote: "The quality and consistency of their work has helped me build a loyal audience across platforms.",
      highlight: "build a loyal audience"
    }
  ];

  // Load video durations on component mount
  useEffect(() => {
    // Create temporary video elements to get durations
    testimonials.forEach((testimonial, index) => {
      const video = document.createElement('video');
      video.src = testimonial.videoUrl;
      video.muted = true; // Add muted to prevent autoplay issues
      
      // Handle errors in case video can't be loaded
      video.onerror = (e) => {
        console.error(`Error loading video ${testimonial.videoUrl}:`, e);
        // Set a default duration if video can't be loaded
        setVideoDurations(prev => {
          const newDurations = [...prev];
          newDurations[index] = 8000; // Default 8 seconds
          return newDurations;
        });
      };
      
      video.onloadedmetadata = () => {
        setVideoDurations(prev => {
          const newDurations = [...prev];
          newDurations[index] = video.duration * 1000; // Convert to milliseconds
          return newDurations;
        });
      };
    });
  }, [testimonials]);

  // Auto-scroll functionality that waits for videos to complete
  // This serves as a fallback in case the onEnded event doesn't fire properly
  useEffect(() => {
    let timeout;
    
    if (isInView && autoplayEnabled && videoDurations.length > 0) {
      // Get current video duration, fallback to 8 seconds if not available
      const currentDuration = videoDurations[currentIndex] || 8000;
      
      // Add a small buffer to the duration to ensure onEnded has a chance to fire first
      const durationWithBuffer = currentDuration + 1000; // Add 1 second buffer
      
      // Set timeout to advance to next slide after video finishes (as a fallback)
      timeout = setTimeout(() => {
        console.log('Auto-advance timeout triggered (fallback)');
        setCurrentIndex((prevIndex) => 
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
      }, durationWithBuffer);
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [currentIndex, testimonials.length, videoDurations, isInView, autoplayEnabled]);

  // Add global user interaction detection
  useEffect(() => {
    const handleInteraction = () => {
      if (!userInteracted) {
        console.log('User interaction detected, enabling sound');
        setUserInteracted(true);
      }
    };

    // Add event listeners for common user interactions
    document.addEventListener('click', handleInteraction);
    document.addEventListener('touchstart', handleInteraction);
    document.addEventListener('keydown', handleInteraction);

    return () => {
      // Clean up event listeners on component unmount
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('touchstart', handleInteraction);
      document.removeEventListener('keydown', handleInteraction);
    };
  }, [userInteracted]);

  // Animation when section comes into view
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
      
      // If we have videos and user has interacted, make sure we respect both conditions
      if (videoRefs.current && videoRefs.current[currentIndex] && userInteracted) {
        videoRefs.current[currentIndex].muted = false;
        console.log('Section in view, unmuting video if user has interacted');
      }
    } else {
      // When section scrolls out of view, mute all videos
      videoRefs.current.forEach(videoEl => {
        if (videoEl) {
          videoEl.muted = true;
          console.log('Section out of view, muting all videos');
        }
      });
    }
  }, [isInView, controls, currentIndex, userInteracted]);

  // Handle manual navigation
  const handlePrev = () => {
    setAutoplayEnabled(false); // Disable autoplay when user interacts manually
    setUserInteracted(true); // Mark that user has interacted with the page
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setAutoplayEnabled(false); // Disable autoplay when user interacts manually
    setUserInteracted(true); // Mark that user has interacted with the page
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Handle dot navigation
  const handleDotClick = (index) => {
    setAutoplayEnabled(false); // Disable autoplay when user interacts manually
    setUserInteracted(true); // Mark that user has interacted with the page
    setCurrentIndex(index);
  };

  // Animation variants
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

  // Ensure videos play when they become active and handle sound based on userInteracted state
  useEffect(() => {
    // Pause all videos first
    videoRefs.current.forEach((videoEl, index) => {
      if (videoEl && index !== currentIndex) {
        videoEl.pause();
        // Ensure non-active videos are muted
        videoEl.muted = true;
      }
    });

    // Only try to play if we have a valid video reference
    if (videoRefs.current && videoRefs.current[currentIndex]) {
      const videoElement = videoRefs.current[currentIndex];
      videoElement.currentTime = 0;
      
      // Set muted state based on user interaction AND if section is in view
      videoElement.muted = !userInteracted || !isInView;
      
      // Log video information for debugging
      console.log(`Attempting to play video ${currentIndex}:`, {
        src: videoElement.src,
        muted: videoElement.muted,
        userInteracted: userInteracted,
        isInView: isInView,
        autoplayEnabled: autoplayEnabled,
        readyState: videoElement.readyState,
        networkState: videoElement.networkState
      });
      
      // Attempt to play the video when it becomes active
      const playPromise = videoElement.play();
      
      // Handle potential play() rejection (browser policy)
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log("Autoplay prevented:", error);
          // If autoplay is prevented due to browser policies,
          // we might want to show a play button overlay or other UI
          
          // For most browsers, we need a user interaction to play with sound
          if (!userInteracted) {
            console.log("Retrying with muted video due to browser policy");
            videoElement.muted = true;
            videoElement.play().catch(e => {
              console.error("Still can't play video:", e);
              // Since we can't play the video, let's manually advance after a delay
              if (autoplayEnabled) {
                setTimeout(() => {
                  setCurrentIndex(prevIndex => 
                    prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
                  );
                }, 5000); // Wait 5 seconds before advancing if video can't play
              }
            });
          }
        });
      }
    } else {
      console.log(`No video reference for index ${currentIndex}`);
    }
  }, [currentIndex, userInteracted, isInView, testimonials.length, autoplayEnabled]);

  return (
    <section id="testimonials" ref={containerRef} className="py-20 md:py-32 bg-black overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="space-y-12"
        >
          {/* Section Heading */}
          <div className="space-y-3 text-center">
            <motion.p variants={itemVariants} className="uppercase text-blue-400 tracking-wider font-medium">
              CLIENT TESTIMONIALS
            </motion.p>
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-white">
              SUCCESS STORIES
            </motion.h2>
            <motion.p variants={itemVariants} className="text-gray-400 max-w-3xl mt-4 mx-auto">
              Hear from our clients about how our services have helped them achieve their goals
              and elevate their digital presence.
            </motion.p>
          </div>

          {/* Testimonials Carousel */}
          <div className="relative">
            {/* Main carousel */}
            <div className="overflow-hidden">
              <motion.div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div 
                    key={testimonial.id} 
                    className="min-w-full w-full flex flex-col md:flex-row gap-8 items-center justify-center"
                  >
                    {/* Video Column - Maintaining 9:16 aspect ratio on all screen sizes */}
                    <div className="w-full md:w-[280px] rounded-xl overflow-hidden relative">
                      <div className="aspect-[9/16] relative">
                        <video
                          ref={el => { videoRefs.current[testimonials.indexOf(testimonial)] = el; }}
                          src={testimonial.videoUrl}
                          className="absolute inset-0 w-full h-full object-cover"
                          controls
                          playsInline
                          muted={!userInteracted || !isInView || currentIndex !== testimonials.indexOf(testimonial)}
                          loop={false}
                          preload="auto"
                          poster={testimonial.posterUrl || ''}
                          autoPlay={currentIndex === testimonials.indexOf(testimonial)}
                          onClick={() => {
                            setUserInteracted(true);
                            // If this is the current video and it's muted, unmute it
                            if (currentIndex === testimonials.indexOf(testimonial) && videoRefs.current[currentIndex].muted) {
                              videoRefs.current[currentIndex].muted = false;
                            }
                          }}
                          onEnded={() => {
                            console.log('Video ended, autoplay:', autoplayEnabled);
                            if (autoplayEnabled) {
                              // Just advance to the next slide without changing autoplay state
                              setCurrentIndex((prevIndex) => 
                                prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
                              );
                            }
                          }}
                          onError={(e) => {
                            console.error(`Error playing video:`, e);
                          }}
                        ></video>
                        
                        {/* Sound notification overlay */}
                        {isInView && !userInteracted && currentIndex === testimonials.indexOf(testimonial) && (
                          <div className="absolute top-4 right-4 bg-black/70 text-white p-2 rounded-lg flex items-center space-x-2 cursor-pointer backdrop-blur-sm"
                               onClick={() => setUserInteracted(true)}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072M12 9.5l-3-3m0 0l-3 3m3-3v12" />
                            </svg>
                            <span className="text-sm font-medium">Click to enable sound</span>
                          </div>
                        )}
                        
                        {/* Fallback for when video doesn't load */}
                        <div className="absolute inset-0 flex items-center justify-center bg-gray-900 text-white z-[-1]">
                          <div className="text-center p-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                            <p className="text-sm">Client Testimonial</p>
                          </div>
                        </div>
                        
                        {/* Client info overlay at bottom of video */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                          <h4 className="font-bold text-white text-xl">{testimonial.name}</h4>
                          <br/>
                          {/* <p className="text-blue-400 text-sm">{testimonial.position}</p> */}
                          <p className="text-blue-400 text-sm"> </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Quote Column */}
                    <div className="w-full md:w-1/2 flex flex-col justify-center md:pl-8">
                      <div className="text-6xl text-blue-400 opacity-50 mb-4">"</div>
                      <p className="text-xl md:text-2xl text-gray-200 mb-6 leading-relaxed">
                        {testimonial.quote.split(testimonial.highlight).map((part, i, array) => {
                          if (i < array.length - 1) {
                            return (
                              <React.Fragment key={i}>
                                {part}
                                <span className="font-bold text-blue-400">{testimonial.highlight}</span>
                              </React.Fragment>
                            );
                          }
                          return <React.Fragment key={i}>{part}</React.Fragment>;
                        })}
                      </p>
                      <div className="text-6xl text-blue-400 opacity-50 text-right">"</div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
            
            {/* Navigation Arrows */}
            <button 
              onClick={handlePrev}
              className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            
            <button 
              onClick={handleNext}
              className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
          
          {/* Dot Navigation */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index ? 'bg-blue-400 w-6' : 'bg-gray-600'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
