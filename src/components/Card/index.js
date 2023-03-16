import React from 'react'
import ContentLoader from 'react-content-loader';

import AppContext from '../../context';
import styles  from './Card.module.scss'

function Card({
    //идентификатор товара
    id,             
    //название товара
    title,          
    //картинка товара
    imageUrl,       
    //цена товара
    price,          
    //добавляем товар в корзину товаров
    onPlus,         
    //флаг загрузки информации о товаре
    loading = false 
}) {
    //выясняем по функции из контекста находится ли этот товар в корзине или нет
    const {isItemAdded} = React.useContext(AppContext); 
    
    //полная информация о товаре
    const obj = {id, title, imageUrl, price};   

    //функция пополнения корзины товаров
    const onClickPlus = () => {
        onPlus(obj);
    }

    return (
        <div className={styles.card}>
            {loading ? (
                //загрузка информации о товаре
                <ContentLoader
                    speed={2}
                    width={155}
                    height={250}
                    viewBox="0 0 155 265"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                >
                    <rect x="1" y="0" rx="10" ry="10" width="155" height="155" />
                    <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
                    <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
                    <rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
                    <rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
                </ContentLoader>
            ) : (
                <>
                    <img width='100%' height={135} src={imageUrl} alt="Sneakers"/>
                    <h5>{title}</h5>
                    <div className="d-flex justify-between align-center">
                        <div className="d-flex flex-column">
                            <span>Price:</span>
                            <b>{price} rub.</b>
                        </div>
                        {onPlus && <img 
                            className={styles.plus}
                            onClick={onClickPlus} 
                            src={isItemAdded(id) ? '/img/btn-checked.svg' : '/img/btn-plus.svg'} 
                            alt="Plus"
                        />}
                    </div>
                </>
            )}
        </div>
    )
}

export default Card; 