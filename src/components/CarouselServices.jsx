import { useState, useEffect } from "react";

/* const images = [
  "/casa-kame-de-dragon-ball_1920x1080_xtrafondos.com.jpg",
  "/champinones-brillando_1920x1080_xtrafondos.com.jpg",
  "/dark-star-thresh-league-of-legends_1920x1080_xtrafondos.com.jpg",
]; */

const CarouselServices = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Avanzar automáticamente cada 5 segundos
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextImage();
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentImageIndex]);

  // Verificación de imágenes para evitar errores cuando images es undefined o nulo
  const currentImage =
    images && images.length > 0 ? images[currentImageIndex] : null;

  console.log("currentImageIndex:", currentImageIndex);
  console.log("currentImage:", currentImage);

  return (
    <div className="relative max-w-[1400px] mx-auto">
      {currentImage && (
        <img
          className="w-full max-h-[300px] object-cover object-center rounded-lg"
          src={currentImage}
          alt={`Imagen ${currentImageIndex + 1}`}
        />
      )}
    </div>
  );
};

export default CarouselServices;
