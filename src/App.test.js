import { render, screen, fireEvent, mount } from "@testing-library/react";
import { act } from "@testing-library/react";
import ReservationForm from './components/ReservationForm';

test('Renders the ReservationForm heading', () => {
    render(<ReservationForm />);
    const headingElement = screen.getByText("Reserve a table");
    expect(headingElement).toBeInTheDocument();
})


describe('ReservationForm',  () => {
  test('submits the form data when the submit button is clicked', () => {
    const handleReservationChange = jest.fn();
    const handleSubmit = jest.fn();
    const setReservation = jest.fn();
    render(<ReservationForm handleReservationChange={handleReservationChange} setReservation={setReservation} handleSubmit={handleSubmit} />);


    fireEvent.change(screen.getByTestId('name'), { target: { value: 'John' } });
    fireEvent.change(screen.getByLabelText('Phone:'), { target: { value: '1234567890' } });
    fireEvent.change(screen.getByLabelText('Email:'), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText('Date:'), { target: { value: '2023-05-04' } });
    fireEvent.change(screen.getByLabelText('Time:'), { target: { value: '14:30' } });
    fireEvent.change(screen.getByLabelText('Guests:'), { target: { value: '2' } });
    fireEvent.change(screen.getByLabelText('Occasion:'), { target: { value: 'Birthday' } });

    expect(handleReservationChange).toHaveBeenCalledTimes(8);

    fireEvent.click(screen.getByText('Submit'));

    expect(handleSubmit).toHaveBeenCalledWith({
      name: 'John',
      phone: '1234567890',
      email: 'john@example.com',
      date: '2023-05-04',
      time: '14:30',
      guests: '2',
      occasion: 'Birthday',
    });
  });
});