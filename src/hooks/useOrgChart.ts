import { useState, useCallback } from 'react';
import { OrgNode } from '../types/org-chart';
import { addDepartment } from '../services/department.service';
import { Message } from '../types/org-chart';
import { updateOrgChart } from '../utils/helpers';

export const useOrgChart = (initialData: OrgNode) => {
  const [orgData, setOrgData] = useState(initialData);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const addMessage = useCallback((text: string, type: 'user' | 'assistant') => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      type,
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, newMessage]);
  }, []);

  const handleAddDepartment = useCallback(async (
    departmentName: string,
    parentDepartment?: string
  ) => {
    setIsLoading(true);
    try {
      const response = await addDepartment(departmentName, parentDepartment);
      
      if (response.success && response.data) {
        const updatedOrgData = updateOrgChart(
          orgData,
          response.data,
          parentDepartment
        );
        setOrgData(updatedOrgData);
        
        addMessage(
          `Successfully added department "${departmentName}"${
            parentDepartment ? ` under "${parentDepartment}"` : ''
          }.`,
          'assistant'
        );
        return true;
      } else {
        addMessage(
          `Failed to add department: ${response.message}`,
          'assistant'
        );
        return false;
      }
    } finally {
      setIsLoading(false);
    }
  }, [orgData, addMessage]);

  return {
    orgData,
    messages,
    isLoading,
    addMessage,
    handleAddDepartment,
  };
};