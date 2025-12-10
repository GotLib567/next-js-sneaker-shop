"use client";
import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import styles from "./ImageSlider.module.css";

const slides = [
    { src: "/images/sneaker-1.jpg", alt: "Sneaker photo 1" },
    { src: "/images/sneaker-2.jpg", alt: "Sneaker photo 2" },
    { src: "/images/sneaker-3.jpg", alt: "Sneaker photo 3" },
    { src: "/images/sneaker-1.jpg", alt: "Sneaker photo 4" },
];

function ImageSlider() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [lightboxOpen, setLightboxOpen] = useState(false);

    const openLightboxAt = (index: number) => {
        setSelectedIndex(index);
        setLightboxOpen(true);
    };

    return (
        <div className={styles.wrapper}>
            <button
                type="button"
                className={styles.mainImage}
                onClick={() => openLightboxAt(selectedIndex)}
            >
                <Image
                    src={slides[selectedIndex].src}
                    alt={slides[selectedIndex].alt}
                    fill
                    className={styles.image}
                    priority
                    sizes="(min-width: 1024px) 40vw, 90vw"
                />
            </button>

            <div className={styles.thumbnails}>
                {slides.map((slide, index) => (
                    <button
                        type="button"
                        key={index}
                        className={`${styles.thumbnailButton} ${index === selectedIndex ? styles.active : ""}`}
                        onClick={() => setSelectedIndex(index)}
                    >
                        <div className={styles.thumbnailImage}>
                            <Image
                                src={slide.src}
                                alt={slide.alt}
                                fill
                                className={styles.image}
                                sizes="100px"
                            />
                        </div>
                    </button>
                ))}
            </div>

            <Lightbox
                open={lightboxOpen}
                close={() => setLightboxOpen(false)}
                slides={slides}
                index={selectedIndex}
                plugins={[Thumbnails]}
                on={{ view: ({ index }) => setSelectedIndex(index) }}
            />
        </div>
    );
}

export default ImageSlider;
