// js/jsonld-dinamico.js
(function() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "LodgingBusiness",
        "name": "Casa Rural Los Robles",
        "url": window.location.href, // URL de la página actual
        "image": [
		  "https://casarurallosrobles.com/ImagenesGaleria/Casa/casa_fachada.jpg",
		  "https://casarurallosrobles.com/ImagenesGaleria/Casa/chimenea.jpg",
		  "https://casarurallosrobles.com/ImagenesGaleria/Casa/habitacion_principal.jpg"
		],
        "logo": "https://casarurallosrobles.com/Logo_Los_Robles.png",
        "description": "Casa Rural Los Robles, alojamiento rural en Zarzuela de Galve, Guadalajara. Disfruta del encanto de la Sierra Norte, naturaleza y descanso.",
        "telephone": "+34 678 985 395",
        "email": "ar.losrobles.valverde@gmail.com",
		
        "owner": {
            "@type": "Person",
            "name": "Sergio Robledo Monasterio"
        },
		
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Travesía de la Huerta 1",
            "addressLocality": "Zarzuela de Galve",
            "addressRegion": "Guadalajara",
            "postalCode": "19238",
            "addressCountry": "ES"
        },
		
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 40.595,
            "longitude": -3.085
        }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);
})();
