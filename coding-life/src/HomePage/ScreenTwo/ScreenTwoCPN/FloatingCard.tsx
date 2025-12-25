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
        <h3>{title}</h3>
        
      </div>
    );
  };
  
  export default function FloatingCards() {
    return (
      <div className="floating-wrapper">
      
  
        <FloatingCard
          title="Vibe Code"
         
          img="/horror3.jpg"
          className="top-right"
          delay="1.2s"
        />
  
        <FloatingCard
          title="OverTime"
        
          img="/horror2.jpg"
          className="left"
          delay="2s"
        />
  
        <FloatingCard
          title="Watch ur cam"
     
          img="/horror1.jpg"
          className="bottom-right"
          delay="1.6s"
        />
      </div>
    );
  }
  