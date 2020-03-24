
import { config } from 'dotenv'
config()

import sirv from 'sirv';
import polka from 'polka';
import bodyParser from 'body-parser';

import compression from 'compression';
import * as sapper from '@sapper/server';
import session from 'express-session';
import sessionFileStore from 'session-file-store';


const FileStore = sessionFileStore(session);

console.log('port ', process.env.FOO)

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';


polka()
	.use(bodyParser.json())
	.use(session({
		secret: 'conduit',
		resave: false,
		saveUninitialized: true,
		cookie: {
			maxAge: 31536000
		},
		store: new FileStore({
			path: process.env.NOW ? `/tmp/sessions` : `.sessions`
		})
	}))
	.use(
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		sapper.middleware({
			session: (req,res) => ({
				user: {user_email:"a@a.com"},
        person: {first_name: "Alexander", last_name: "King", _key: "91172"}
			})
		})
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});
