$(document).ready(function(){

	jQuery.validator.addMethod("namen", function(value, element)
	{	return this.optional(element) || /^[a-zA-ZüÜäÄöÖéèàâç ]*$/.test(value);
	},	"bitte name eingeben")
	jQuery.validator.classRuleSettings.namen = {namen: true};

	jQuery.validator.addMethod("plz1", function(value, element)
	{	return this.optional(element) || /^([0-9\s\(\)\+\-\/]{4,5})*$/.test(value);
	}, 	"?")
	jQuery.validator.classRuleSettings.plz1 = {plz1: true};
    
    jQuery.validator.addMethod("emails", function(value, element)
	{	return this.optional(element) || /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
	}, 	"?")
	jQuery.validator.classRuleSettings.emails = {emails: true};
    
	jQuery.validator.addMethod("adr", function(value, element)
	{	return this.optional(element) || /^[a-zA-Z0-9 .,]+$/.test(value);
	}, 	"")
	jQuery.validator.classRuleSettings.adr = {adr: true};

	jQuery.validator.addMethod("telefonnr", function(value, element)
	{	return this.optional(element) || /^([0-9 ]{10,20})$/.test(value);
	}, 	"")
	jQuery.validator.classRuleSettings.telefonnr = {telefonnr: true};


	$("#form1").validate({

	rules: {
	nname: {
		required: true,
		namen: true,
		minlength:2
	},
	vorname: {
		required: true,
		namen: true,
		minlength:2
		},
	adresse: {
		adr: true
	},
	plz: {
		required: true,
		plz1: true
		},
    ort: {
        required: true
    },
	email: {
		required: true,
		emails: true
		},
	telefon: {
		telefonnr: true
		},
	benutzername: {
		required: true,
		minlength:5,
            remote: { type: "post",
			url: "../php/user.php"
			}
		},
	passwort: {
		required: true,
		minlength: 8
		},
	passwort_best: { 
		required: true,
		minlength: 8,
		equalTo: "#passwort"
		}
	},

	
success: function(element) {
		element
		.text('OK').addClass('valid')
		.closest('.control-group').removeClass('error').addClass('success');
	},

	messages: {
	
    nname: {
        required: "Bitte gib deinen Namen ein",
        minlength: "Dein Name ist ungültig, mindestens 2 Buchstaben"
    },
    vorname: {
		required: "Bitte gib deinen Vornamen ein",
		minlength: "Dein Vorname ist ungültig, mindestens 2 Buchstaben"
	},
	    adresse: {
        required: "Bitte gib deine Adresse mit Hausnummer ein"
    },    
    plz: {
        required: "Bitte gib die Postleitzahl ein",
        plz1: "Es werden nur 4- oder 5stellige Postleitzahlen akzeptiert"
    },
    ort: {
        required: "Bitte gib den Ort ein"
    },
	email: {
		required: "Bitte gib deine E-Mail Adresse ein",
		emails: "Bitte gib eine gültige E-Mail Adresse ein"
	},
	telefon: {
		telefonnr: "Bitte gib eine gültige Telefonnummer ein"
	},
	benutzername: {
		required: "Erstelle einen Benutzernamen",
		minlength: "Dein Benutzername ist zu kurz, mindestens 5 Zeichen",
        remote: "Name existiert bereits"
	},
	passwort: {
		required: "Erstelle ein Passwort",
		minlength: "Dein Passwort ist zu Kurz, mindestens 8 Zeichen"
	},
	passwort_best: {
		required: "Bitte Passwort eingeben",
		minlength: "Dein Passwort ist zu Kurz, mindestens 8 Zeichen",
		equalTo: "Die Passwörter stimmen nicht überein"
		},
	},
	});
});
