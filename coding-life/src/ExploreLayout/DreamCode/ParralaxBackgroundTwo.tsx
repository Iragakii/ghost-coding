import { useEffect, useRef } from "react";

const ParralaxBackgroundTwo = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!ref.current) return;

      const x = (e.clientX / window.innerWidth - 0.5) * 70;
      const y = (e.clientY / window.innerHeight - 0.5) * 70;

      ref.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div
        ref={ref}
        className="absolute -inset-12 bg-[url('/dreambg2.png')] bg-cover bg-center will-change-transform"
      />
    </div>
  );
};

export default ParralaxBackgroundTwo;
