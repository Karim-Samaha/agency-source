import StyleCircle from "./styleCircle";
const Contact = () => {
    return <section className="contact">
        <StyleCircle className="styleCircle" width="100vh" left="52vh" backgroundColor="green" />
        <h1>Get in Toch</h1>
        <form>
            <div className="formLineOne">
                <input type="text" placeholder="Username" />
                <input type="text" placeholder="Phone" />
            </div>
            <input className="email" type="text" placeholder="Email" />
            <input className="subject" type="text" placeholder="Subject" />
            <textarea placeholder="Your message" />
            <input className="submit" type="submit" />


        </form>
    </section>
}

export default Contact;