import { useState, useEffect } from 'react';
import './App.css';
import Modal from './components/Modal';

function App() {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        const jsonUrl = `https://mekanxsari.github.io/ecomtech-frontend/data/data.json`;
        
        fetch(jsonUrl)
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setFilteredProducts(data);
            })
            .catch(err => console.error('ошибка загрузки данных:', err));
    }, []);

    useEffect(() => {
        let filtered = products;
        
        if (selectedCategory) {
            filtered = filtered.filter(product => 
                product.category.includes(selectedCategory)
            );
        }
        
        if (searchTerm.trim()) {
            filtered = filtered.filter(product =>
                product.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }
        
        setFilteredProducts(filtered);
    }, [searchTerm, selectedCategory, products]);

    const productClick = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    return (
        <>
            <div className="search-wrapper">
                <input 
                    type="search" 
                    placeholder='Поиск товаров...'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <select 
                    name='categories'
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                >
                    <option value="">Все категории</option>
                    <option value="Одежды">Одежда</option>
                    <option value="Обувь">Обувь</option>
                    <option value="Аксессуары">Аксессуары</option>
                </select>
            </div>
            
            <div className='product-wrapper'>
                <ul className='product-list'>
                    {filteredProducts.map(product => (
                        <li key={product.id}>
                            <a 
                                href='#' 
                                onClick={(e) => {
                                    e.preventDefault();
                                    productClick(product);
                                }}
                            >
                                <img
                                    src={product.images[0]}
                                    className='product-image'
                                    alt={product.title}
                                />
                                <div className='product-details'>
                                    <p className='product-name'>{product.title}</p>
                                    <span className='product-price'>{product.price} ₽</span>
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            <Modal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)}
                product={selectedProduct}
            />
        </>
    )
}

export default App;