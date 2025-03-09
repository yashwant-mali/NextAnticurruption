'use client';

import { Provider } from 'react-redux';
import { store } from './redux/store';

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <div>
            {children}
          </div>
        </Provider>
      </body>
    </html>
  );
}
