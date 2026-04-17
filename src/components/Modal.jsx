import { useEffect, useState } from 'react';

function Modal({ isOpen, onClose, productId }) {
    const [activeImage, setActiveImage] = useState('https://imgcdn.befree.ru/rest/V1/images/1280/product/images/BF2623120043/BF2623120043_4_1.webp');

    const images = {
        main: 'https://imgcdn.befree.ru/rest/V1/images/1280/product/images/BF2623120043/BF2623120043_4_1.webp',
        thumbnails: [
            'https://imgcdn.befree.ru/rest/V1/images/1280/product/images/BF2623120043/BF2623120043_4_1.webp',
            'https://imgcdn.befree.ru/rest/V1/images/1280/product/images/BF2623120043/BF2623120043_4_3.webp',
            'https://imgcdn.befree.ru/rest/V1/images/1280/product/images/BF2623120043/BF2623120043_4_6.webp',
            'https://imgcdn.befree.ru/rest/V1/images/1280/product/images/BF2623120043/BF2623120043_4_100.webp'
        ]
    };

    const changeImage = (newImage, e) => {
        e.preventDefault();
        setActiveImage(newImage);
    };

    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };
        
        if (isOpen) {
            document.addEventListener('keydown', handleEsc);
            document.body.style.overflow = 'hidden';
        }
        
        return () => {
            document.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = 'auto';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="modal" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>
                    <svg 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path 
                            d="M18 6L6 18" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                        />
                        <path 
                            d="M6 6L18 18" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
                <div className="content">
                    <div className='img-area'>
                        <img 
                            className='active-img active-image-effect' 
                            src={activeImage} 
                            alt='Product'
                            key={activeImage}
                        />
                        <ul className='img-list'>
                            {images.thumbnails.map((img, index) => (
                                <li key={index}>
                                    <a 
                                        href='#' 
                                        onClick={(e) => changeImage(img, e)}
                                        className={activeImage === img ? 'active-thumb' : ''}
                                    >
                                        <img src={img} alt={`Thumbnail ${index + 1}`} />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='product-area'>
                        <div className='product-title'>
                            Футболка хлопковая рваная с принтом
                        </div>
                        <div className='product-description'>
                            <label>О товаре:</label>
                            <p>Ut mattis, eros vitae tempor euismod, massa risus egestas ex, sit amet semper nisl arcu ut urna. Nunc quis neque vitae ipsum vulputate interdum nec convallis augue. Aliquam nunc ipsum, viverra et convallis vestibulum, facilisis nec orci. Phasellus tempor sagittis nisi, ut sollicitudin sapien varius vitae. Vestibulum ac convallis massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi porttitor commodo porttitor. Nullam efficitur rutrum enim sit amet molestie. Suspendisse id ipsum congue, pharetra velit at, ultrices ex. Pellentesque quis pretium ante, maximus rutrum turpis. Ut eget bibendum enim. Ut maximus, tortor vel finibus bibendum, augue nisi tincidunt eros, id rutrum velit nisi vitae augue. Phasellus dictum dignissim risus, eu faucibus sem aliquet in. Curabitur elementum nunc eu ex pharetra, eget rutrum magna efficitur. Vivamus laoreet mauris ut justo sagittis euismod. Phasellus sollicitudin, mi et blandit feugiat, mauris felis varius orci, vel sagittis orci eros nec ex.</p>
                        </div>

                        <div className='product-props'>
                            <span className='product-price'>499 ₽</span>
                            <button className='buy-btn'>Купить</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;