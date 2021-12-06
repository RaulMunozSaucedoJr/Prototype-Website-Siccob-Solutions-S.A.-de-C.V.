import {
    contact_form_inputs,
    regex_inputs,
    empty_inputs
} from './Selectors/Selector.js'

import {
    verify_Inputs_Lenght,
} from './Functions/Functions.js'


! function () {
    "use strict";
    document.addEventListener("DOMContentLoaded", function () {


        /**
         * @param {function} (Listeners)
         **/

        const Listeners = () => {

            /**
             * @param {Default Validation Bootstrap 4}
             **/

            window.addEventListener('load', function () {
                var forms = document.getElementsByClassName('needs-validation');
                var validation = Array.prototype.filter.call(forms, function (form) {
                    form.addEventListener('submit', function (event) {
                        if (form.checkValidity() === false) {
                            event.preventDefault();
                            event.stopPropagation();
                        }
                        form.classList.add('was-validated');
                    }, false);
                });
            }, false);


            const validate_Inputs_Regexs = (field, regex) => {
                regex.test(field.value.trim()) ? field.className = 'valido' : field.className = 'invalido';
            }

            empty_inputs.forEach(item => item.addEventListener(
                'keyup', e => {
                    validate_Inputs_Regexs(e.target, regex_inputs[e.target.attributes.name.value.trim()])
                }
            ));

            /**
             *@param {constant} (contact_form_inputs)
             *@param {method} (forEach)
             *@param {element} (input)
             *@param {method} (addEventListener)
             *@param {function} (verify_Inputs_Lenght) 
             **/

            contact_form_inputs.forEach((input) => {
                input.addEventListener('keyup', verify_Inputs_Lenght);
            });


        };

        /**
         * @param {function} (Listeners)
         */
        Listeners();


    });
}();