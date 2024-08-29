import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Adds custom matchers for Jest
import ContainerSquare from './ContainerSquare';

// describe('ContainerSquare Component', () => {

//     test('renders the container and smaller square', () => {
//         render(<ContainerSquare />);

//         // Check if the container square is in the document
//         const container = screen.getByRole('button');
//         expect(container).toBeInTheDocument();

//         // Check if the smaller square is rendered inside the container
//         const smallerSquare = container.firstChild;
//         expect(smallerSquare).toBeInTheDocument();
//     });

//     test('toggles active state on mouse click', () => {
//         render(<ContainerSquare />);

//         const container = screen.getByRole('button');

//         // Check initial state (inactive)
//         expect(container).toHaveClass('inactive');
//         expect(container).not.toHaveClass('active');

//         // Simulate click to toggle to active
//         fireEvent.click(container);
//         expect(container).toHaveClass('active');
//         expect(container).not.toHaveClass('inactive');

//         // Simulate another click to toggle back to inactive
//         fireEvent.click(container);
//         expect(container).toHaveClass('inactive');
//         expect(container).not.toHaveClass('active');
//     });

//     test('toggles active state on keyboard "Enter" key press', () => {
//         render(<ContainerSquare />);

//         const container = screen.getByRole('button');

//         // Check initial state (inactive)
//         expect(container).toHaveClass('inactive');
//         expect(container).not.toHaveClass('active');

//         // Simulate "Enter" key press to toggle to active
//         fireEvent.keyDown(container, { key: 'Enter', code: 'Enter' });
//         expect(container).toHaveClass('active');
//         expect(container).not.toHaveClass('inactive');

//         // Simulate "Enter" key press to toggle back to inactive
//         fireEvent.keyDown(container, { key: 'Enter', code: 'Enter' });
//         expect(container).toHaveClass('inactive');
//         expect(container).not.toHaveClass('active');
//     });

//     test('toggles active state on keyboard "Space" key press', () => {
//         render(<ContainerSquare />);

//         const container = screen.getByRole('button');

//         // Check initial state (inactive)
//         expect(container).toHaveClass('inactive');
//         expect(container).not.toHaveClass('active');

//         // Simulate "Space" key press to toggle to active
//         fireEvent.keyDown(container, { key: ' ', code: 'Space' });
//         expect(container).toHaveClass('active');
//         expect(container).not.toHaveClass('inactive');

//         // Simulate "Space" key press to toggle back to inactive
//         fireEvent.keyDown(container, { key: ' ', code: 'Space' });
//         expect(container).toHaveClass('inactive');
//         expect(container).not.toHaveClass('active');
//     });

//     test('automatically reverts to inactive state after 2000ms', () => {
//         jest.useFakeTimers(); // Mock timers for this test

//         render(<ContainerSquare />);

//         const container = screen.getByRole('button');

//         // Simulate click to toggle to active
//         fireEvent.click(container);
//         expect(container).toHaveClass('active');

//         // Fast-forward time by 2000ms
//         jest.advanceTimersByTime(2000);

//         // After 2000ms, it should automatically revert to inactive
//         expect(container).toHaveClass('inactive');
//         expect(container).not.toHaveClass('active');

//         jest.useRealTimers(); // Restore real timers after test
//     });

//     test('focus outline appears when container is focused', () => {
//         render(<ContainerSquare />);

//         const container = screen.getByRole('button');

//         // Simulate focus event
//         fireEvent.focus(container);

//         // Check if focus outline is applied
//         expect(container).toHaveStyle('box-shadow: 0 0 0 3px rgba(143, 151, 243, 0.5)');

//         // Simulate blur event to remove focus
//         fireEvent.blur(container);

//         // Check if focus outline is removed
//         expect(container).not.toHaveStyle('box-shadow: 0 0 0 3px rgba(143, 151, 243, 0.5)');
//     });
// });
