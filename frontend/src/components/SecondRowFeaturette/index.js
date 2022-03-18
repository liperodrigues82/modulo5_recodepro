import paris from '../../assets/imgs/destinations/paris.jpg';

function SecondRowFeaturette() {

    return (
        <>
            <section className="row featurette mx-5 my-5 px-5">
                <div className="col-md-7 order-md-2">
                    <h2 className="featurette-heading"> Europa <span className="text-muted"> .Os melhores destinos </span></h2>
                    <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque delectus inventore
                        tempora. Repellendus aspernatur, accusamus totam debitis, eius harum magni voluptas quibusdam
                        eveniet alias quidem? Animi aut quod ad eos.</p>
                </div>
                <div className="col-md-5 order-md-1">
                    <div>
                        <img className="d-block w-100" src={paris} alt="First slide" />
                    </div>

                </div>
            </section>
        </>
    );
}

export default SecondRowFeaturette;