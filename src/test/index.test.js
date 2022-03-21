import { render, screen } from '@testing-library/react';
import { ChatMessage, ChatMessageType } from '../models/chat-message.model';
import { ChatDisplayWindow } from '../pages/ChatPage/components/ChatDisplayWindow/ChatDisplayWindow';
import { ChatWindowHeader } from '../pages/ChatPage/components/ChatWindowHeader/ChatWindowHeader';
import { ChatWindowInputField } from '../pages/ChatPage/components/ChatWindowInputField/ChatWindowInputField';

it('Testing ChatWindowHeader Component', () => {

  render(<ChatWindowHeader />);
  
  expect(screen.getByText('Ember')).toBeInTheDocument();
});

it('Testing ChatWindowInputField Component', () => {

  render(<ChatWindowInputField />);
  
  expect(screen.getByPlaceholderText('Write a message')).toBeInTheDocument();
});


it('Testing ChatDisplayWindow Component [User Message]', () => {

  let message = new ChatMessage();
  message.data = 'Hi';
  message.timestamp = '5:24 PM';
  message.type = ChatMessageType.message;
  
  render(<ChatDisplayWindow messages={[message]}/>);
  
  expect(screen.getByText(message.data)).toBeInTheDocument();
  expect(screen.getByText(message.timestamp)).toBeInTheDocument();
  expect(screen.getByText('You')).toBeInTheDocument();
});

it('Testing ChatDisplayWindow Component [Bot Reply Message]', () => {

  let message = new ChatMessage();
  message.data = 'Hi';
  message.timestamp = '5:24 PM';
  message.type = ChatMessageType.reply;
  
  render(<ChatDisplayWindow messages={[message]}/>);
  
  expect(screen.getByText(message.data)).toBeInTheDocument();
  expect(screen.getByText(message.timestamp)).toBeInTheDocument();
  expect(screen.getByText('Bot')).toBeInTheDocument();
});