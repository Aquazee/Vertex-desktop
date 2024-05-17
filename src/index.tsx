import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Chart } from 'react-google-charts';

import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';
import { Button, Spinner } from 'reactstrap';

import configureAppStore, { getPreloadedState } from './store/configureStore';

import AppContextProvider from './contexts/AppContextProvider';
import { ErrorBoundary } from '@components/ErrorBoundary';

(async () => {
    const preloadedState = getPreloadedState();

    const root = createRoot(document.getElementById('root'));

    root.render(
        <React.StrictMode>
            <ReduxProvider store={configureAppStore(preloadedState)}>
                <AppContextProvider>
                    <ErrorBoundary>
                        <div> HOME PAGE </div>
                        <Button color="danger">Danger!</Button>
                        <Spinner size="sm">Loading...</Spinner>
                        <Chart
                            chartType="ScatterChart"
                            data={[
                                ['Age', 'Weight'],
                                [4, 5.5],
                                [8, 12],
                            ]}
                            width="100%"
                            height="400px"
                            legendToggle
                        />

                        <p>
                            <i className="bi bi-arrow-down-up"></i>
                        </p>
                    </ErrorBoundary>
                </AppContextProvider>
            </ReduxProvider>
        </React.StrictMode>
    );
})();
