import {
    blocks,
    container
} from "./Inputs_Validation/Selectors/Selector.js";

! function () {
    "use strict";
    document.addEventListener("DOMContentLoaded", () => {
        //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        console.clear();
        //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        document.addEventListener("contextmenu", (e) => {
            e.preventDefault();
            const notificacionSinInternet = () => {
                const notification = new Notification("Mensaje del departamento TIC´S", {
                    body: "El click derecho se encuentra desactivado. \n" + "Lamentamos las molestias causadas.",
                    icon: "/App/FrontEnd/Assets/Images/Logo_Company/Siccob_Logo.png"
                });
                notification.onclick = (e) => {
                    window.location.href = "mailto:lgonzalezp@agn.gob.mx"
                }
            }
            if (Notification.permission === "granted") {
                notificacionSinInternet();
            } else if (Notification.permission !== "denied") {
                Notification.requestPermission().then(permission => {
                    if (permission === "granted") {
                        notificacionSinInternet();
                        console.log(permission);
                    }
                });
            }

        }, false);
        //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        window.addEventListener("offline", () => {
            const notificacionSinInternet = () => {
                const notification = new Notification("Mensaje de Siccob Solutions:", {
                    body: "Al parecer el servicio de internet se encuentra caido, por lo que podría experimentar un uso errorneo del sitio web. \n" + "Favor de esperar a que el servicio se reestablezca.",
                    icon: "/App/FrontEnd/Assets/Images/Logo_Company/Siccob_Logo.png"
                });
                notification.onclick = (e) => {
                    window.location.href = "mailto:contacto@siccob.com.mx"
                }
                setTimeout(() => {
                    notification.close();
                }, 4 * 1000);
            }
            if (Notification.permission === "granted") {
                notificacionSinInternet();
            } else if (Notification.permission !== "denied") {
                Notification.requestPermission().then(permission => {
                    if (permission === "granted") {
                        notificacionSinInternet();
                        console.log(permission);
                    }
                });
            }
        });
        //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        document.addEventListener("visibilitychange", () => {
            document.visibilityState == "hidden" ? document.title = "Soluciones integrales para tu negocio" : document.title =
                "Siccob Solutions S.A. de C.V.";
        });
        //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        const el = document.querySelector('img', 'picture');
        const observador = lozad(el);
        observador.observe();
        //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    })
}();