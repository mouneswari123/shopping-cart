import App from './App';
import { renderWithProviders } from './test-utils';

test('renders app', () => {
  renderWithProviders(<App />);
});
