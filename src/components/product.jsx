import { useParams } from "react-router-dom";
import { data } from '../data'
const Product = () => {
    const { id } = useParams();
    const product = data.filter((item) => {
        if (item.id == id) {
            return item
        }
    })
    const { name, desc, photo, images, info } = product[0];
    return <section className="product-page">
        <div className="sectionOne">
            {images.map((img) => {
                const {id, url} = img;
                return <img key={id} src={url} alt="" />
            })}
        </div>
        <div className="sectionTwo">
            <h1>{name}</h1>
            <p>{info}</p>
            <button>More...</button>
        </div>
    </section>
}

export default Product;