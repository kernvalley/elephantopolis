if (navigator.share instanceof Function) {
	document.querySelectorAll('.btn.share').forEach(btn => {
		btn.addEventListener('click', ({ currentTarget }) => {
			const { title = document.title, url = location.href, text } = currentTarget.dataset;
			navigator.share({ title, text, url });
		});

		btn.disabled = false;
	});
}
