(function () {
	function initShareToggle() {
		var shareButton = document.getElementById('share-general');
		var sharePanel = document.getElementById('share-full');

		if (!shareButton || !sharePanel) {
			return;
		}

		shareButton.addEventListener('click', function () {
			var expanded = shareButton.getAttribute('aria-expanded') === 'true';
			sharePanel.style.display = expanded ? '' : 'block';
			shareButton.setAttribute('aria-expanded', expanded ? 'false' : 'true');
		});
	}

	function initEmailReveal() {
		var revealButton = document.getElementById('reveal-email');
		var emailContainer = document.getElementById('contact-email');

		if (!revealButton || !emailContainer) {
			return;
		}

		revealButton.addEventListener('click', function () {
			var email = ['support', 'boardnaut.com'].join('@');
			var link = document.createElement('a');
			link.href = 'mailto:' + email;
			link.textContent = email;

			emailContainer.textContent = '';
			emailContainer.appendChild(link);
			emailContainer.hidden = false;
			revealButton.hidden = true;
			revealButton.setAttribute('aria-expanded', 'true');
		});
	}

	initShareToggle();
	initEmailReveal();
}());

