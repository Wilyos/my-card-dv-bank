document.addEventListener('DOMContentLoaded', function() {
  const menuIcon = document.getElementById('menu-icon');
  const navbarList = document.querySelector('.navbar ul');

  if (menuIcon && navbarList) {
    menuIcon.addEventListener('click', function() {
      navbarList.classList.toggle('active');
    });

    navbarList.addEventListener('click', function(event) {
      if (event.target.tagName === 'A' && navbarList.classList.contains('active')) {
        navbarList.classList.remove('active');
      }
    });
  }

  const saveContactButton = document.querySelector('.btn-sci .btn');

  if (saveContactButton) {
    saveContactButton.addEventListener('click', function(event) {
      event.preventDefault();

      const vcardData = [
        'BEGIN:VCARD',
        'VERSION:3.0',
        'FN:Walter Osmaro Bonilla',
        'ORG:D&V Bank',
        'TEL;TYPE=CELL:+18319156872',
        'EMAIL:Bonillawo09@gmail.com',
        'URL:https://bankdv.com/',
        'END:VCARD'
      ].join('\n');

      const fileBlob = new Blob([vcardData], { type: 'text/vcard' });
      const fileUrl = URL.createObjectURL(fileBlob);
      const link = document.createElement('a');

      link.href = fileUrl;
      link.download = 'walter-osmaro-bonilla.vcf';
      document.body.appendChild(link);
      link.click();

      setTimeout(function() {
        document.body.removeChild(link);
        URL.revokeObjectURL(fileUrl);
      }, 100);
    });
  }
});