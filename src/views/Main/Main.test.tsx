import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { setupServer } from 'msw/node';
import { handlers } from 'mocks/handlers';
import { render, screen, fireEvent, waitFor } from 'helpers/test-utils';
import Main from 'views/Main/Main';
import AddPost from 'views/AddPost/AddPost';

const server = setupServer(...handlers);

describe('Main Page Posts', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it('Checks if posts load on main page', async () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Main testsUrl="/posts" />
      </Router>
    );
    await screen.findByText('Content of first post');
  });
  // it('Checks if post is properly added to store', async () => {
  //   const history = createMemoryHistory();
  //   render(
  //     <Router history={history}>
  //       <AddPost />
  //       <Main />
  //     </Router>
  //   );
  //   const input = screen.getByPlaceholderText(
  //     'This is optional*'
  //   ) as HTMLInputElement;
  //   const textarea = screen.getByTestId(
  //     'new-post-textarea'
  //   ) as HTMLTextAreaElement;
  //   const button = screen.getByText('Add Post');
  //   fireEvent.change(input, { target: { value: 'Testing todos' } });
  //   fireEvent.change(textarea, { target: { value: 'Test Post content' } });
  //   button.click();
  //   await waitFor(() => {
  //     screen.getByText('Add Post');
  //     screen.getByText('Test Post content');
  //   });
  // });
});
