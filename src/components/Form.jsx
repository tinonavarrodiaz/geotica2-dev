const Form = () => {
  return (
    <form action="/php/send.php" className={'Contacto__form'}>
      <div className="input-group">
        <input type="text" name={'name'} placeholder="Nombre:" />
      </div>
      <div className="input-group">
        <input type="email" name={'email'} placeholder="Email:" />
      </div>
      <div className="input-group textarea">
        <textarea name={'msg'} placeholder="Mensaje:" />
      </div>
      <div
        className="g-recaptcha"
        data-sitekey="6LetnCAgAAAAAC4S_EH4Yx1_LKKAM0oyLH1ayQtZ"
      ></div>

      <button type={'submit'}>Enviar</button>
    </form>
  );
};

export default Form;
