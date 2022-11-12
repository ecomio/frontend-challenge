import { DomManipulationView } from '@views/user/DomManipulationView';
import ReactDOM from 'react-dom';

import MockTheme from '../mocks/MockTheme';

test('renders ecomio btb button to the screen', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MockTheme>
      <DomManipulationView />
    </MockTheme>,
    div,
  );
  expect(div.querySelector('#btbButton')?.textContent).toBe('Budget-to-Beat');
});
