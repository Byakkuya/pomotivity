import { render , screen ,fireEvent,cleanup} from '@testing-library/react';

import Todolist from '../TodoList';

test('should render todo component', () => {
    render(<Todolist/>);
    const todoElement = screen.getByTestId('todotest');
    expect(todoElement).toBeInTheDocument();
});

test('should render input', () => {
    render(<Todolist/>);
    const inputElement = screen.getByPlaceholderText(/Add todo.../i);
    expect(inputElement).toBeInTheDocument();
});


//you should type something in the input before clicking add button
test('should type something in the input before clicking add button', () => {
    render(<Todolist/>);
    const inputElement = screen.getByPlaceholderText(/Add todo.../i);
    const buttonElement = screen.getByText(/Add/i);
    if (inputElement.value === '') {
        fireEvent.change(inputElement,{target:{value:'hello'}});
        fireEvent.click(buttonElement);
        const itemElement = screen.getByText(/hello/i);
        expect(itemElement).toBeInTheDocument();}

    else  {
        fireEvent.click(buttonElement);
        const itemElement = screen.getByText(/hello/i);
        expect(itemElement).not.toBeInTheDocument();
    }
});

//when you press add button it should add item to the tododlist
test('should add item to the todolist', () => {
    render(<Todolist/>);
    const inputElement = screen.getByPlaceholderText(/Add todo.../i);
    const buttonElement = screen.getByText(/Add/i);
    fireEvent.change(inputElement,{target:{value:'hello'}});
    fireEvent.click(buttonElement);
    const itemElement = screen.getByText(/hello/i);
    expect(itemElement).toBeInTheDocument();
});
//when you press delete button it should delete item from the tododlist
test('should delete item from the todolist', () => {
    render(<Todolist/>);
    const inputElement = screen.getByPlaceholderText(/Add todo.../i);
    const buttonElement = screen.getByText(/Add/i);
    fireEvent.change(inputElement,{target:{value:'hello'}});
    fireEvent.click(buttonElement);
    const itemElement = screen.getByText(/hello/i);
    expect(itemElement).toBeInTheDocument();
    const deleteElement = screen.getByText(/Delete/i);
    fireEvent.click(deleteElement);
    expect(itemElement).not.toBeInTheDocument();
});


