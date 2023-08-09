 import frame1 from '../assets/frame1.png'
 import Frame2 from '../assets/Frame2.png'
 import Frame3 from '../assets/frame3.png'
 import frame4 from '../assets/frame4.png'
 import { useState, useEffect } from 'react';
 
 const images = [frame1, Frame2, Frame3, frame4];

// export default function ImageSwapper() {
//     const [currentIndex, setCurrentIndex] = useState(0);

//     useEffect(() => {
//         const intervalId = setInterval(() => {
//             if(currentIndex === images.length - 1) {
//                 setCurrentIndex(0);
//             } 
//             else {
//                  setCurrentIndex(currentIndex + 1);
//             }
//         }, 2000)
        
//         return () => clearInterval(intervalId);
//     }, [])

//     return (
//         <div>
//             <img src={images[currentIndex]} />
//         </div>
//     )
// }

export default function ImageSwapper() {
    const [currentImage, setCurrentImage] = useState(null);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImage(images[Math.floor(Math.random() * images.length)]);
        }, 2000)
        
        return () => clearInterval(intervalId);
    }, [])

    return (
        <div>
            <img src={currentImage} />
        </div>
    )
}