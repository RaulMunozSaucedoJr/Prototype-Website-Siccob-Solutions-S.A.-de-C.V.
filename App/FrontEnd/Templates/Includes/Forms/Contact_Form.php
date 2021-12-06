<form action="#" method="post" class="needs-validation" id="Contact_Form" novalidate>
    <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <div class="form-group">
                <label for="Names_Contact_Form" class="Label_Newletter">Nombre Completo</label>
                <input type="text" inputmode="text" class="form-control" id="Names_Contact_Form" name="Names_Contact_Form" placeholder="Nombre Completo" required>
                <p>
                    <strong>
                        Este campo únicamente NO acepta carácteres especiales.
                    </strong>
                </p>
                <div class="invalid-feedback">
                    Campo vacio. Favor de verificarlo.
                </div>
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <div class="form-group">
                <label for="Email_Contact_Form" class="Label_Contact_Form">Correo Electrónico</label>
                <input type="text" inputmode="email" class="form-control" id="Email_Contact_Form" name="Email_Contact_Form" placeholder="Correo Electrónico" required>
                <p>
                    <strong>
                        Ingrese un formato de correo valido.<br>Ejemplo: correo@gmail.com
                    </strong>
                </p>
                <div class="invalid-feedback">
                    Campo vacio. Favor de verificarlo.
                </div>
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <div class="form-group">
                <label for="Email_Contact_Form" class="Label_Contact_Form">Motivo de mensaje:</label>
                <select class="custom-select" required>
                    <option selected value="">Seleccione una opción...</option>
                    <option value="1">Desarrollo de Software</option>
                    <option value="2">Cableado de CCTV, Intrusión e Incendio</option>
                    <option value="3">Pólizas de Servicio</option>
                </select>
                <div class="invalid-feedback">
                    Campo vacio. Favor de verificarlo.
                </div>
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <button type="submit" class="Register_Newsletter btn btn-outline-* btn-lg btn-block" id="Register_Newsletter">
                Enviar
            </button>
        </div>
    </div>
</form>