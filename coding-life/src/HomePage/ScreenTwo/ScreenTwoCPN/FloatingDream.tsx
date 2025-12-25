type CardProps = {
    title: string;
  
    img: string;
    className?: string;
    delay?: string;
  };
  
  const FloatingCard = ({ title, img, className, delay }: CardProps) => {
    return (
      <div
        className={`floating-card ${className}`}
        style={{ animationDelay: delay }}
      >
        <img src={img} alt={title} className="card-icon" />
        <h3 className="dream-h3">{title}</h3>
        
      </div>
    );
  };
  
  export default function FloatingDream() {
    return (
      <div className="floating-wrapper">
      
  
        <FloatingCard
          title="Beside U"
         
          img="/dream1.jpg"
          className="top-right"
          delay="1.2s"
        />
  
        <FloatingCard
          title="Eyes Contact"
        
          img="/dream2.jpg"
          className="left"
          delay="2s"
        />
  
        <FloatingCard
          title="Chill Coding"
     
          img="/dream3.jpg"
          className="bottom-right"
          delay="1.6s"
        />
      </div>
    );
  }
  