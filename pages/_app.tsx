import { SSRProvider } from '@react-aria/ssr';
import { NextUIProvider, createTheme } from '@nextui-org/react';
import { ErrorBoundary } from 'components/error-boundary';
import { Error } from 'components/error';
import 'styles/globals.css';

export default function App({ Component, pageProps }) {
	const theme = createTheme({
		type: 'light',
	});
	return (
		<SSRProvider>
			<NextUIProvider theme={theme}>
				<ErrorBoundary fallback={<Error />}>
					<Component {...pageProps} />
				</ErrorBoundary>
			</NextUIProvider>
		</SSRProvider>
	);
}
