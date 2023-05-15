import { render, screen, fireEvent, waitFor} from "@testing-library/react";
import ReservationForm from './components/ReservationForm';
import user from "@testing-library/user-event";
import { act } from "react-dom/test-utils";


beforeEach(()=>{
  render(<ReservationForm/>);
})


it('Renders the ReservationForm heading', () => {
    const headingElement = screen.getByText("Reserve a table");
    expect(headingElement).toBeInTheDocument();
})

it('should click the button',()=>{
expect(screen.getByTestId('btn')).toBeInTheDocument()
})

// describe('handling ReservationForm inputs',  () => {
//   const handleReservationChange = jest.fn();
//   const handleSubmit = jest.fn(()=>console.log('hello'));
//   const setReservation = jest.fn();
//   it('submits the form data when the submit button is clicked', async () => {
//     render(<ReservationForm handleReservationChange={handleReservationChange} setReservation={setReservation} handleSubmit={handleSubmit} />);

//      user.type(getName(), 'John')
//      user.type(getPhone(), '1511231546')
//      user.type(getEmail(), 'John@internet.com')
//      user.type(getDate(), '10/01/2015')
//      user.type(getTime(), '10:12')
//      user.type(getGuests(), '2')
//      user.type(getOccasion(), 'Birthday')
//     // user.type(getCheckBox(), 'false')

// expect(getName().value).toBe('John')
//     user.click(screen.getByRole('button', {
//       name: /Submit/i
//     }));
//     // expect(handleSubmit).toHaveBeenCalledTimes();
// // await waitFor(()=>{
//   expect(handleSubmit).toHaveBeenCalled()
// // })
//     expect(handleSubmit).toHaveBeenCalledWith({
//       name: 'John',
//       phone: '1511231546',
//       email: 'John@internet.com',
//       time: '10:12',
//       guests: '2',
//       occasion: 'Birthday'
//     });
//   });
// });


// const getName = ()=>{
//   return screen.getByRole('textbox', {
//     name: /name:/i
//   })
// }
// const getPhone = ()=>{
//   return screen.getByRole('textbox', {
//     name: /phone:/i
//   })
// }
// const getEmail = ()=>{
//   return screen.getByRole('textbox', {
//     name: /email:/i
//   })
// }
// const getDate = ()=>{
//   return screen.getByLabelText(/date:/i)
// }
// const getTime = ()=>{
//   return screen.getByLabelText(/time:/i)
// }
// const getGuests = ()=>{
//   return screen.getByRole('spinbutton', {
//     name: /guests:/i
//   })
// }
// const getOccasion = ()=>{
//   return screen.getByRole('textbox', {
//     name: /occasion:/i
//   })
// }
// // const getCheckBox = ()=>{
// //   return screen.getByRole('checkbox', {
// //     name: /comments:/i
// //   })
// // }