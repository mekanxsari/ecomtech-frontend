import { useState } from 'react';
import './App.css';
import Modal from './components/Modal';

function App() {
    const [isModalOpen, setIsmodalOpen] = useState(false);
    const [selectedProductId, setSelectedProductId] = useState(null);

    const productClick = (productId) => {
        setSelectedProductId(productId);
        setIsmodalOpen(true);
    };

    return (
        <>
            <div className="search-wrapper">
                <input type="search" placeholder='Поиск товаров...' />
                <select name='categories'>
                    <option value="">Все категории</option>
                    <option value="electronics">Электроника</option>
                    <option value="clothing">Одежда</option>
                    <option value="books">Книги</option>
                </select>
            </div>
            <div className='product-wrapper'>
                <ul className='product-list'>
                    <li>
                        <a href='#' data-id='1' onClick={ (e) => { e.preventDefault(); productClick(1) } }>
                            <img
                                src='https://imgcdn.befree.ru/rest/V1/images/1280/product/images/BF2623120043/BF2623120043_4_1.webp'
                                className='product-image'
                                alt='Image Description'
                            />
                            <div className='product-details'>
                                <p className='product-name'>Футболка хлопковая рваная с принтом</p>
                                <span className='product-price'>499 ₽</span>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href='#' data-id='2' onClick={ (e) => { e.preventDefault(); productClick(2) } }>
                            <img
                                src='https://imgcdn.befree.ru/rest/V1/images/1280/product/images/BF2623120043/BF2623120043_4_1.webp'
                                className='product-image'
                                alt='Image Description'
                            />
                            <div className='product-details'>
                                <p className='product-name'>Футболка хлопковая рваная с принтом</p>
                                <span className='product-price'>499 ₽</span>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href='#' data-id='3' onClick={ (e) => { e.preventDefault(); productClick(3) } }>
                            <img
                                src='https://imgcdn.befree.ru/rest/V1/images/1280/product/images/BF2623120043/BF2623120043_4_1.webp'
                                className='product-image'
                                alt='Image Description'
                            />
                            <div className='product-details'>
                                <p className='product-name'>Футболка хлопковая рваная с принтом</p>
                                <span className='product-price'>499 ₽</span>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href='#' data-id='4' onClick={ (e) => { e.preventDefault(); productClick(4) } }>
                            <img
                                src='https://imgcdn.befree.ru/rest/V1/images/1280/product/images/BF2623120043/BF2623120043_4_1.webp'
                                className='product-image'
                                alt='Image Description'
                            />
                            <div className='product-details'>
                                <p className='product-name'>Футболка хлопковая рваная с принтом</p>
                                <span className='product-price'>499 ₽</span>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href='#' data-id='5' onClick={ (e) => { e.preventDefault(); productClick(5) } }>
                            <img
                                src='https://imgcdn.befree.ru/rest/V1/images/1280/product/images/BF2623120043/BF2623120043_4_1.webp'
                                className='product-image'
                                alt='Image Description'
                            />
                            <div className='product-details'>
                                <p className='product-name'>Футболка хлопковая рваная с принтом</p>
                                <span className='product-price'>499 ₽</span>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href='#' data-id='6' onClick={ (e) => { e.preventDefault(); productClick(6) } }>
                            <img
                                src='https://imgcdn.befree.ru/rest/V1/images/1280/product/images/BF2623120043/BF2623120043_4_1.webp'
                                className='product-image'
                                alt='Image Description'
                            />
                            <div className='product-details'>
                                <p className='product-name'>Футболка хлопковая рваная с принтом</p>
                                <span className='product-price'>499 ₽</span>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href='#' data-id='7' onClick={ (e) => { e.preventDefault(); productClick(7) } }>
                            <img
                                src='https://imgcdn.befree.ru/rest/V1/images/1280/product/images/BF2623120043/BF2623120043_4_1.webp'
                                className='product-image'
                                alt='Image Description'
                            />
                            <div className='product-details'>
                                <p className='product-name'>Футболка хлопковая рваная с принтом</p>
                                <span className='product-price'>499 ₽</span>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href='#' data-id='8' onClick={ (e) => { e.preventDefault(); productClick(8) } }>
                            <img
                                src='https://imgcdn.befree.ru/rest/V1/images/1280/product/images/BF2623120043/BF2623120043_4_1.webp'
                                className='product-image'
                                alt='Image Description'
                            />
                            <div className='product-details'>
                                <p className='product-name'>Футболка хлопковая рваная с принтом</p>
                                <span className='product-price'>499 ₽</span>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href='#' data-id='9' onClick={ (e) => { e.preventDefault(); productClick(9) } }>
                            <img
                                src='https://imgcdn.befree.ru/rest/V1/images/1280/product/images/BF2623120043/BF2623120043_4_1.webp'
                                className='product-image'
                                alt='Image Description'
                            />
                            <div className='product-details'>
                                <p className='product-name'>Футболка хлопковая рваная с принтом</p>
                                <span className='product-price'>499 ₽</span>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href='#' data-id='10' onClick={ (e) => { e.preventDefault(); productClick(10) } }>
                            <img
                                src='https://imgcdn.befree.ru/rest/V1/images/1280/product/images/BF2623120043/BF2623120043_4_1.webp'
                                className='product-image'
                                alt='Image Description'
                            />
                            <div className='product-details'>
                                <p className='product-name'>Футболка хлопковая рваная с принтом</p>
                                <span className='product-price'>499 ₽</span>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>

            <Modal 
                isOpen={isModalOpen} 
                onClose={() => setIsmodalOpen(false)}
                productId={selectedProductId}
            />
        </>
    )
}

export default App