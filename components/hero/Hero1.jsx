import Container from './../Container';
const Hero1 = (props) => {
    const { image , h1 , p , button } = props 
    return (
        <section className="flex items-center justify-center h-screen">
            <Container className={"pt-10 pb-8 lg:px-10 text-center"}>
                <div className="grid items-center grid-cols-12 gap-10">
                    <div className="col-span-12 bg-gray-200 lg:col-span-7 h-[30rem]">
                        <figure><img className="w-auto" src="@@webRoot/assets/img/illustrations/i2.png"  alt="img" /></figure>
                    </div>
                    <div className="col-span-12 text-center lg:col-span-5 lg:text-start">
                        <h1 className="mb-5 text-[2.6rem] leading-[1.1]">Grow Your Business with Our Solutions.</h1>
                        <p className="text-lg mb-7">We help our clients to increase their website traffic, rankings and visibility in search results.</p>
                        <span><a className="px-6 py-2 text-white cursor-pointer btn bg-primary">Try It For Free</a></span>
                    </div>

                </div>
            </Container>

        </section>
    );
}

export default Hero1;