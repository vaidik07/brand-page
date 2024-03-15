const Hero = () =>{
    return (
        <main className="hero">
            <div className="Hero-content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
                <div className="hero-buttons">
                    <button className="button">Shop Now</button>
                    <button className="button">Category</button>
                </div>
                <div className="shopping">
                    <p>Also available on </p>
                    <div className="brand-icons">
                        <img src="/images/amazon.png" alt="amazon"/>
                        <img src="/images/flipkart.png" alt="flipkart"/>
                    </div>
                </div>
            </div>
            <div className="Hero-image">
                <img src="/images/shoe_image.png" />
            </div>
        </main>
    );

    
}

export default Hero;