function removeTrailingChevronFromButtons() {
	const buttons = document.querySelectorAll('button.next-step, .btn.next-step');

	buttons.forEach((button) => {
		button.textContent = button.textContent.replace(/\s*>\s*$/, '');
	});
}

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', removeTrailingChevronFromButtons);
} else {
	removeTrailingChevronFromButtons();
}
