import styles from './ProductCard.module.css'

type ProductCardType = {
    productName: string;
    image: string;
    description: string;
    oldPrice: number;
    currentPrice: number;
    variantColors: Array<string> // string[]
}

function ProductCard(props: ProductCardType) {

    const { productName,
        image,
        description,
        oldPrice,
        currentPrice,
        variantColors } = props

    return (
        <div className={styles.productCard}>
            <img src={image} alt="product name" />
            <div className={styles.info}>
                <h3 className={styles.name}>{productName}</h3>
                <p className={styles.description}>{description}</p>
                <div className={styles.price}>
                    <span className={styles.oldPrice}>{oldPrice}€</span>
                    <span className={styles.currentPrice}>{currentPrice}€</span>
                </div>
                <div className={styles.colors}>
                    {
                        //Expressoes .map??? 
                        variantColors.map((color) => {
                            return <span style={{ backgroundColor: color }}></span>
                        })
                    }




                </div>
            </div>
        </div>
    )
}

export default ProductCard