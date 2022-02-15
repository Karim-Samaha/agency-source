import StyleCircle from "./styleCircle";
const Introduction = () => {
    return <section className="intorduction-section">
        <StyleCircle backgroundColor="green" top="-40vh" left="-40vh" />
        <StyleCircle backgroundColor="green" top="-10vh"  right="-30vh" />
        <div className="sectionOne">
            <h1><span>AVOCADO</span> DIGITAL <br /> PRODUCT AGENCY</h1>
            <p>
                Create live segments and target the right people
                for messages based on their behavior.
            </p>
            <button>Discover</button>
        </div>
        <div className="sectionTwo">
            <img src="./assets/Avocado.png" alt="" />
        </div>
    </section>
}

export default Introduction;