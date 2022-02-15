import { data } from '../data.js';
import { Link } from 'react-router-dom';
const Service = () => {
    return <section className="service-section">
        <h2>Service we can help you with</h2>
        <div className="serviceItems-container">
            {data.map((item) => {
                return <div key={item.id} className="service-item">
                    <h3>{item.name}</h3>
                    {
                        item.video ?
                            <video autoPlay muted loop src={`./assets/${item.video}`}></video>
                            : <img src={`./assets/${item.photo}`} />
                    }
                    <Link to={`/product/${item.id}`}><p className='link'>{item.desc}</p></Link>
                </div>
            })}
        </div>
    </section>
}
export default Service