document.addEventListener('DOMContentLoaded', function() {
	const menuIcon = document.getElementById('menu-icon');
	const navbarUl = document.querySelector('.navbar ul');
	if (menuIcon && navbarUl) {
		menuIcon.addEventListener('click', function() {
			navbarUl.classList.toggle('active');
		});

		navbarUl.addEventListener('click', function(e) {
			if (e.target.tagName === 'A' && navbarUl.classList.contains('active')) {
				navbarUl.classList.remove('active');
			}
		});
	}

	const saveContactBtn = document.querySelector('.btn-sci .btn');
	if (saveContactBtn) {
		saveContactBtn.addEventListener('click', function(e) {
			e.preventDefault();

			const vcardData = [
				'BEGIN:VCARD',
				'VERSION:3.0',
				'FN:Mayra Yanira Munguia Delgado',
				'ORG:D&V Bank',
				'EMAIL:yanirabakery1975@gmail.com',
				'URL:https://bankdv.com/',
				'END:VCARD'
			].join('\n');

			const blob = new Blob([vcardData], { type: 'text/vcard' });
			const url = URL.createObjectURL(blob);
			const link = document.createElement('a');

			link.href = url;
			link.download = 'mayra-yanira-munguia-delgado.vcf';
			document.body.appendChild(link);
			link.click();

			setTimeout(function() {
				document.body.removeChild(link);
				URL.revokeObjectURL(url);
			}, 100);
		});
	}
});