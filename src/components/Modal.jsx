import { useEffect, useState } from 'react';

function Modal({ isOpen, onClose, product }) {
    const [activeImage, setActiveImage] = useState('');

    useEffect(() => {
        if (product && product.images && product.images.length > 0) {
            setActiveImage(product.images[0]);
        }
    }, [product]);

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

    if (!isOpen || !product) return null;

    const changeImage = (newImage, e) => {
        e.preventDefault();
        setActiveImage(newImage);
    };

    const thumbnails = product.images && product.images.length > 1 
        ? product.images.slice(0, 4) 
        : [product.images?.[0]];

    return (
        <div className="modal" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
                <div className="content">
                    <div className='img-area'>
                        <img 
                            className='active-img active-image-effect' 
                            src={activeImage} 
                            alt={product.title}
                            key={activeImage}
                        />
                        {thumbnails.length > 1 && (
                            <ul className='img-list'>
                                {thumbnails.map((img, index) => (
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
                        )}
                    </div>
                    <div className='product-area'>
                        <div className='product-title'>
                            {product.title}
                        </div>
                        <div className='product-description'>
                            <label>О товаре:</label>
                            <p>{product.description}</p>
                        </div>
                        <div className='product-props'>
                            <span className='product-price'>{product.price} ₽</span>
                            <button className='buy-btn'>Купить</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;