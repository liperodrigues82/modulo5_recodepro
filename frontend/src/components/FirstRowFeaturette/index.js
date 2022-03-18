import 'bootstrap/dist/css/bootstrap.css';
import rio from '../../assets/imgs/destinations/rio-de-janeiro.jpg';

function FirstRowFeaturette() {

    return (
        <>
            <section className="row featurette mx-5 my-5 px-5">
                <div className="col-md-7">
                    <h2 className="featurette-heading">Brasil <span class="text-muted"> .Os melhores destinos </span></h2>
                    <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem aut saepe omnis
                        tempore nihil distinctio enim consequatur libero amet non sequi quae in, pariatur temporibus
                        debitis. Dicta quis ducimus eos.</p>
                </div>
                <div className="col-md-5">
                    <div>
                        <img className="d-block w-100" src={rio} alt="First slide" />
                    </div>
                </div>
            </section>

            <hr class="featurette-divider"></hr>
        </>
    );
}

export default FirstRowFeaturette;