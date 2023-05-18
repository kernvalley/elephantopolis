if (navigator.share instanceof Function) {
	document.querySelectorAll('.btn.share').forEach(btn => {
		btn.addEventListener('click', ({ currentTarget }) => {
			navigator.share(currentTarget.dataset);
		});

		btn.disabled = false;
	});
}
