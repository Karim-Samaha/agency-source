import StyleCircle from "./styleCircle";
import { users } from '../data'
const Testimonials = () => {
    return <section className="testimonials-section">
        <StyleCircle width="100vh" height="100vh" backgroundColor="green" left="53vh" top="-75vh" />
        <h2>Testimonials</h2>
        <div className="testimonials-container">
            {users.map((item) => {
                const {id, logo, avatar, comment, name, title} = item;
                return <div key={id} className="testiomnial-item">
                    <img className="logo" src={`./assets/${logo}`} alt="" />
                    <p>{comment}</p>
                    <div className="testiomnial-person">
                        <img className="avatar" src={`./assets/${avatar}`} alt="" />
                        <h3>{name}</h3>
                        <h5>{title}</h5>
                    </div>
                </div>
            })}
        </div>
    </section>
}

export default Testimonials;