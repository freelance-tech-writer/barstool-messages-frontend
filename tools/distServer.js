import config from '../webpack.config.dev';
import express from 'express';
import historyApiFallback from 'connect-history-api-fallback';
import http from 'http';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

const app = express();
const bundler = webpack(config);
const server = http.createServer(app);

app.use(express.static('src/*.html'));
app.use(historyApiFallback());
app.use(webpackHotMiddleware(bundler));
app.use(webpackDevMiddleware(bundler, {
	// Dev middleware can't access config, so we provide publicPath
	publicPath: config.output.publicPath,

	// These settings suppress noisy webpack output so only errors are displayed to the console.
	noInfo: false,
	quiet: false,
	stats: {
		assets: false,
		chunkModules: false,
		chunks: false,
		colors: true,
		hash: false,
		timings: false,
		version: false
	},

	// for other settings see
	// http://webpack.github.io/docs/webpack-dev-middleware.html
}));

server.listen(8081);
