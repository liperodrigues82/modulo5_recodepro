import 'bootstrap/dist/css/bootstrap.css';
import './style.css';

function Hero() {

    return (
        <section className="px-1 py-6 text-center text-white" id="hero">
            <div className="heroContent px-6 my-0">
                <h1 class="display-5 fw-bold">RecodeTour</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the
                        prebuilt components..</p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <a href="/Promo"><button type="button" className="btn btn-primary btn-lg px-4 gap-3">Promoções</button></a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;