import React from 'react';
import { OrgChart } from './components/OrgChart/OrgChart';
import { ChatInterface } from './components/Chat/ChatInterface';
import { useOrgChart } from './hooks/useOrgChart';
import { sampleOrgData } from './data/sampleOrgData';
import { parseMessage } from './services/messageParser';

function App() {
  const { orgData, messages, addMessage, handleAddDepartment } = useOrgChart(sampleOrgData);

  const handleMessage = async (text: string) => {
    addMessage(text, 'user');
    
    const parsedCommand = parseMessage(text);
    
    if (parsedCommand) {
      await handleAddDepartment(parsedCommand.departmentName, parsedCommand.parentDepartment);
    } else {
      addMessage(
        "I'm sorry, I didn't understand that command. Try something like 'Add a new department called Marketing under Sales'.",
        'assistant'
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <div className="w-2/3 p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Organization Chart
        </h1>
        <div className="bg-white rounded-lg shadow-sm p-4">
          <OrgChart data={orgData} />
        </div>
      </div>

      <ChatInterface 
        messages={messages}
        onSendMessage={handleMessage}
      />
    </div>
  );
}

export default App;