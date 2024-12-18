import React from 'react';
import { ChatInput } from './ChatInput';
import { ChatMessage } from './ChatMessage';
import type { Message } from '../../types/org-chart';

interface ChatInterfaceProps {
  messages: Message[];
  onSendMessage: (message: string) => void;
}

export const ChatInterface: React.FC<ChatInterfaceProps> = ({ messages, onSendMessage }) => {
  return (
    <div className="w-1/3 bg-white border-l border-gray-200 flex flex-col">
      <div className="p-4 border-b">
        <h2 className="text-xl font-semibold text-gray-900">
          AI Assistant
        </h2>
        <p className="text-sm text-gray-500">
          Ask me to help you manage the organization chart
        </p>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map(message => (
          <ChatMessage key={message.id} message={message} />
        ))}
      </div>

      <ChatInput onSendMessage={onSendMessage} />
    </div>
  );
}