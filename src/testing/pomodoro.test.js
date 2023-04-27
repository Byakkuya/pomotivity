import { render , screen ,fireEvent, cleanup} from '@testing-library/react';
import PomodoroClock from '../PomodoroClock';


/* rendering the component */
test('should render pomodoro component', () => {
    render(<PomodoroClock/>);
    const pomodoroElement = screen.getByTestId('pomotest');
    expect(pomodoroElement).toBeInTheDocument();
});
test('should render time set', () => {
    render(<PomodoroClock/>);
    const timeElement = screen.getByText(/25:00/i);
    expect(timeElement).toBeInTheDocument();
});

test('should render work session', () => {
    render(<PomodoroClock/>);
    const sessionElement = screen.getByText(/Work/i);
    expect(sessionElement).toBeInTheDocument();
});



test('should render start button', () => {
    render(<PomodoroClock/>);
    const startElement = screen.getByText(/Start/i);
    expect(startElement).toBeInTheDocument();
});

test('should render pause button', () => {
    render(<PomodoroClock/>);
    const pauseElement = screen.getByText(/start/i);
    expect(pauseElement).toBeInTheDocument();
});

test('should render reset button', () => {
    render(<PomodoroClock/>);
    const resetElement = screen.getByText(/Reset/i);
    expect(resetElement).toBeInTheDocument();
});
//when you type the timer it should be number only
test('should only allow numbers in the timer input', () => {
    render(<PomodoroClock />);
    const input = screen.getByTestId('timerinput');
  
    //when you put a number 
    fireEvent.change(input, { target: { value: "25" } });
    fireEvent.blur(input); // trigger value update
    expect(parseInt(input.value)).toBe(25);
   //when it is not a number
fireEvent.change(input, { target: { value: "hello" } });
fireEvent.blur(input); // trigger value update
//expect the input value to be empty
expect(input.value).toBe("");



    
});
  
  //when you press pause button it should pause the timer
test('should pause the timer when Pause button is pressed', () => {
    render(<PomodoroClock/>);
    
    // Click the Start button
    const startButton = screen.getByText(/Start/i);
    fireEvent.click(startButton);
    const pauseButton = screen.getByText(/Pause/i);
    fireEvent.click(pauseButton);
    const timeDisplay = screen.getByText(/25:00/i);
   // the timer should pause
    expect(timeDisplay).not.toBe('00:00');
    

   
  }
    );

// when you press reset button it should reset the timer
test('should reset the timer when Reset button is pressed', () => {
    render(<PomodoroClock/>);
  
    // Click the Start button
    const startButton = screen.getByText(/Start/i);
    fireEvent.click(startButton);
  
    // Click the Reset button
    const resetButton = screen.getByText(/Reset/i);
    fireEvent.click(resetButton);
  
    // Check that the time display is reset to 25:00
    const timeDisplay = screen.getByText(/25:00/i);
    expect(timeDisplay).toHaveTextContent('25:00');
  });
  

  
