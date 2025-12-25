import { Canvas, extend } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
extend(THREE);

/* ================= VIDEO PLANE ================= */
function VideoPlane() {
  const meshRef = useRef<THREE.Mesh>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  
  useEffect(() => {
    const video = document.createElement("video");
    videoRef.current = video;
    
    video.src = "/wife.mp4";
    video.muted = true;
    video.playsInline = true;
    video.preload = "auto";
    video.crossOrigin = "anonymous";
    video.loop = false;
    video.currentTime = 0; // Start at beginning
    
    // Create texture with proper settings to remove gray artifacts
    const texture = new THREE.VideoTexture(video);
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.generateMipmaps = false;
    texture.format = THREE.RGBAFormat;
    texture.needsUpdate = true;
    
    // Material setup to prevent gray artifacts
    const material = new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
      opacity: 1,
      side: THREE.FrontSide,
      depthWrite: false,
      depthTest: false,
      toneMapped: false,
      premultipliedAlpha: false,
      alphaTest: 0.05,
      blending: THREE.NormalBlending,
    });
    
    if (meshRef.current) {
      meshRef.current.material = material;
      meshRef.current.renderOrder = 999;
    }
    
    // GSAP ScrollTrigger for ultra-smooth video scrubbing
    video.onloadedmetadata = () => {
      // Set initial frame immediately
      video.currentTime = 0;

      // Direct currentTime animation - no proxy delay
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#video-section",
          start: "top top",
          end: "bottom bottom",
          scrub: true, // true = instant, no delay
          invalidateOnRefresh: true,
        },
      });

      // Direct animation of video currentTime
      tl.to(video, {
        currentTime: video.duration,
        ease: "none",
      });
    };
    
    video.load();
    
    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
      video.pause();
      texture.dispose();
      material.dispose();
      videoRef.current = null;
    };
  }, []);
  
  return (
    // @ts-ignore
    <mesh ref={meshRef} position={[-0.2, -0.5, 0]}>
      {/* @ts-ignore */}
      <planeGeometry args={[3.7, 3.7]} />
      {/* @ts-ignore */}
    </mesh>
  );
}

/* ================= MAIN ================= */
export default function DreamMoving() {
  useEffect(() => {
    // Refresh ScrollTrigger on mount to ensure proper positioning
    ScrollTrigger.refresh();
  }, []);
  
  return (
    <>
      {/* Fixed character in center */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          pointerEvents: "none",
          overflow: "hidden",
          zIndex: 1,
        }}
      >
        <Canvas
          orthographic
          camera={{ 
            zoom: 250, 
            position: [0, 0, 100],
            near: 0.1,
            far: 1000
          }}
          gl={{
            alpha: true,
            antialias: true,
            premultipliedAlpha: false,
            preserveDrawingBuffer: false,
            powerPreference: "high-performance",
          }}
          style={{
            width: "100%",
            height: "100%",
            background: "transparent",
          }}
          onCreated={({ gl, scene }) => {
            gl.setClearColor(0x000000, 0);
            gl.outputColorSpace = THREE.SRGBColorSpace;
            gl.toneMapping = THREE.NoToneMapping;
            scene.background = null;
          }}
        >
          <VideoPlane />
        </Canvas>
      </div>
      
      {/* Scroll trigger section (invisible) */}
      <section
        id="video-section"
        style={{ 
          height: "400vh",
          position: "relative",
          width: "100%",
          pointerEvents: "none",
        }}
      />
    </>
  );
}