const base = process.env.API_URL || 'http://localhost:4000';

function send({ method, path, data, token }) {
	const fetch = process.browser ? window.fetch : require('node-fetch').default;

	const opts = { method, headers: {} };

	if (data) {
		opts.headers['Content-Type'] = 'application/json';
		opts.body = JSON.stringify(data);
	}

	if (token) {
		opts.headers['Authorization'] = `Token ${token}`;
	}

	return fetch(`${base}/${path}`, opts)
		.then(r => r.text())
		.then(json => {
			try {
				// return null;
				return JSON.parse(json);
			} catch (err) {
				return null;
				// return json;
			}
		});
}
function get(path, token) {
	return send({ method: 'GET', path, token });
}
function post(path, data, token) {
	return send({ method: 'POST', path, data, token });
}
function del(path, token) {
	return send({ method: 'DELETE', path, token });
}
function put(path, data, token) {
	return send({ method: 'PUT', path, data, token });
}

export { get, post, del , put }
