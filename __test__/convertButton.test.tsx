import { render, screen } from './utils';
import userEvent from '@testing-library/user-event';
import ConvertButton from '@/components/convertButton';

describe('ConvertButton', () => {
  it('should render the button with the correct label', () => {
    render(<ConvertButton disabled={false} loading={false} />);

    const button = screen.getByRole('button', { name: /convert/i });
    expect(button).toBeInTheDocument();
  });

  it('should show a loading indicator when loading is true', () => {
    render(<ConvertButton disabled={false} loading={true} />);

    const loadingIndicator = screen.getByText(/converting/i);
    expect(loadingIndicator).toBeInTheDocument();
  });

  it('should disable the button when disabled is true', () => {
    render(<ConvertButton disabled={true} loading={false} />);

    const button = screen.getByRole('button', { name: /convert/i });
    expect(button).toBeDisabled();
  });

  it('should call the onSubmit handler when button is clicked', async () => {
    const onSubmit = jest.fn();
    render(
      <form onSubmit={onSubmit}>
        <ConvertButton disabled={false} loading={false} />
      </form>
    );
    const button = screen.getByRole('button', { name: /convert/i });
    await userEvent.click(button);
    expect(onSubmit).toHaveBeenCalledTimes(1);
  });
});
