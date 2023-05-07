import Home from '@/app/page';
import { render, screen } from './utils';

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />);

    const heading = screen.getByRole('heading', {
      name: /Welcome to Next\.js 13/i,
    });

    expect(heading).toBeInTheDocument();
  });

  it('renders Home page unchanged', async () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });
});
