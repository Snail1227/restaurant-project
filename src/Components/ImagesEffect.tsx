import { useEffect, useState } from "react";


interface ImagesProps {
    images: string[];
}

export const ImagesEffect: React.FC<ImagesProps> = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex(currentImageIndex => (currentImageIndex + 1) % images.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [images.length]);

    const handleImageChange = (index: number) => {
        setCurrentImageIndex(index);
    };

    return (
        <div className="images-container">
                <div className="img-slides">
                    {images.map((src, index) => (
                        <img
                            key={src}
                            src={src}
                            alt={`food${index + 1}`}
                            style={{opacity: index === currentImageIndex ? 1 : 0, transition: 'opacity 1s ease-in-out'}}
                        />
                    ))}

                </div>
                <div className="img-changer">
                    <h2>Vista Mare</h2>
                    <div className="reserve-btn">
                        {images.map((_, index) => (
                                <button
                                    key={index}
                                    className={`change-img-btn ${index === currentImageIndex ? 'img-active' : ''}`}
                                    onClick={() => handleImageChange(index)}
                                ></button>
                            ))}
                    </div>
                </div>
            </div>
    )
}