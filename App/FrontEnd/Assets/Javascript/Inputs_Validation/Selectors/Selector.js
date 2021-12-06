/**
 * @param {constant´s} (ID NEWSLETTER FORM)
 * @param {constant´s} (ID CONTACT FORM)
 */
export const newsletter = document.querySelector('#Contact_Form');
export const contact = document.querySelector('#Contact_Form');

/**
 * @param {constant´s & let´s} (contact_form_inputs, contactform_inputs && Services Item´s)
 * @param {input´s} (We recover the different type´s of inputs we have at the different form´s).
 */

export const contact_form_inputs = document.querySelectorAll("#Contact_Form input[type=text]");
export let empty_inputs = document.querySelectorAll('input');

/**
 * @param {object} (regex_inputs)
 * @param {properties} (Names_Contact_Form from Email_Contact_Form)
 * @param {value´s} (/^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]{8,24}$/ from /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/)
 */

export let regex_inputs = {
    /** NEWSLETTER INPUT´S NAME´S**/
    Names_Contact_Form: /^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]{3,24}$/,
    Email_Contact_Form: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])$/,
    /** CONTACT FORM INPUT´S NAME´S**/
    //Tels_Contact_Form: /^\d{10,20}$/,
};

export const blocks = document.getElementsByClassName("block");
export const container = document.getElementsByClassName("container");