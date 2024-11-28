import section1 from '../../assets/section1.jpg';
import section2 from '../../assets/section2.jpg';
import section3 from '../../assets/section3.jpg';






function Home() {
    return (
        <main className="home">
            <div className="section">
                <div className="image-container">
                    <img src={section1} alt="Section 1" className="section-image" />
                    <div className="text-overlay">
                        <h1>EVERY JOURNEY. SOARING.</h1>
                        <p>DISCOVER HOW WE TAKE YOUR DREAMS SKYWARD ›</p>
                    </div>
                </div>
            </div>
            <div className="section">
                <div className="image-container">
                    <img src={section2} alt="Section 2" className="section-image" />
                    <div className="text-overlay">
                        <h1>THE TRUE ESSENCE. OUR DISTINCTIVE CABIN DESIGNS</h1>
                        <p>EXPLORE THE ELEGANCE WITHIN OUR ICONIC SPACES ›</p>
                    </div>
                </div>
            </div>
            <div className="section">
                <div className="image-container">
                    <img src={section3} alt="Section 3" className="section-image" />
                    <div className="text-overlay">
                        <h1>EXCEPTIONAL LUXURY FLIGHT EXPERIENCES</h1>
                        <p>EXPERIENCE THE ELITE WINGS ADVANTAGE</p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Home;
