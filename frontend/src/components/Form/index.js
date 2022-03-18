import './style.css';

function Form() {

    return (
        <div className="container">
            <div className="contact__wrapper shadow-lg mt-n9">
                <div className="row no-gutters">
                    <div className="col-lg-5 bg-primary contact-info__wrapper p-5 order-lg-2 contact">                       
                    </div>

                    <div class="col-lg-7 contact-form__wrapper p-5 order-lg-1">
                        <form action="#" className="contact-form form-validate" novalidate="novalidate">
                            <div class="row">
                                <div className="col-sm-6 mb-3">
                                    <div className="form-group">
                                        <label className="required-field" for="firstName">Nome</label>
                                        <input type="text" class="form-control" id="firstName" name="firstName" placeholder="Nome" />
                                    </div>
                                </div>

                                <div class="col-sm-6 mb-3">
                                    <div class="form-group">
                                        <label for="lastName">Sobrenome</label>
                                        <input type="text" class="form-control" id="lastName" name="lastName" placeholder="Sobrenome" />
                                    </div>
                                </div>

                                <div className="col-sm-6 mb-3">
                                    <div className="form-group">
                                        <label className="required-field" for="email">Email</label>
                                        <input type="text" className="form-control" id="email" name="email" placeholder="seu-email@email.com" />
                                    </div>
                                </div>

                                <div class="col-sm-6 mb-3">
                                    <div class="form-group">
                                        <label for="phone">Telefone</label>
                                        <input type="tel" class="form-control" id="phone" name="phone" placeholder="(11)988887777" />
                                    </div>
                                </div>

                                <div className="col-sm-12 mb-3">
                                    <div className="form-group">
                                        <label className="required-field" for="message">Como podemos te ajudar?</label>
                                        <textarea className="form-control" id="message" name="message" rows="4" placeholder="Olá, eu gostaria de..."></textarea>
                                    </div>
                                </div>

                                <div className="col-sm-12 mb-3">
                                    <button type="submit" name="submit" className="btn btn-primary">Enviar</button>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Form;