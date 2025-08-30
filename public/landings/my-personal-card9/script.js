// Menú hamburguesa para navbar en móviles
document.addEventListener('DOMContentLoaded', function() {
	const menuIcon = document.getElementById('menu-icon');
	const navbarUl = document.querySelector('.navbar ul');
	if (menuIcon && navbarUl) {
		menuIcon.addEventListener('click', function() {
			navbarUl.classList.toggle('active');
		});
		// Cerrar menú al hacer click en un enlace SOLO si está activo
		navbarUl.addEventListener('click', function(e) {
			if (e.target.tagName === 'A' && navbarUl.classList.contains('active')) {
				navbarUl.classList.remove('active');
			}
		});
	}
});

// Descargar vCard al hacer clic en 'Save Contact'
document.addEventListener('DOMContentLoaded', function() {
	const saveContactBtn = document.querySelector('.btn-sci .btn');
	if (saveContactBtn) {
		saveContactBtn.addEventListener('click', function(e) {
			e.preventDefault();
			const vcardData = `BEGIN:VCARD\nVERSION:3.0\nFN:D&V Bank\nORG:D&V Bank\nTEL;TYPE=WORK,VOICE:3364739727\nEMAIL:management@bankdv.com\nURL:https://bankdv.com/\nEND:VCARD`;
			const blob = new Blob([vcardData], { type: 'text/vcard' });
			const url = URL.createObjectURL(blob);
			const a = document.createElement('a');
			a.href = url;
			a.download = 'dvbank.vcf';
			document.body.appendChild(a);
			a.click();
			setTimeout(() => {
				document.body.removeChild(a);
				URL.revokeObjectURL(url);
			}, 100);
		});
	}
});


 window.emailjs.init('B3VB0AHI54MnMTeCL'); // Reemplaza por tu User ID público de EmailJS

  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    window.emailjs.sendForm('service_euvx9so', 'template_ihy4utg', this)
      .then(function() {
        alert('Message sent successfully!');
      }, function(error) {
        alert('Failed to send message. Please try again.');
      });
  });