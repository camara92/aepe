// Importer jQuery et Bootstrap
import $ from 'jquery';
import 'bootstrap';

// Popper.js pour certains composants de Bootstrap
import '@popperjs/core';

// Exemple d'utilisation d'un composant Bootstrap
$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
});
