export const parseMessage = (message: string) => {
  const addDepartmentRegex = /add (?:a )?(?:new )?department (?:called )?([a-zA-Z\s]+)(?: under ([a-zA-Z\s]+))?/i;
  
  const match = message.match(addDepartmentRegex);
  
  if (match) {
    return {
      action: 'addDepartment',
      departmentName: match[1].trim(),
      parentDepartment: match[2]?.trim(),
    };
  }
  
  return null;
};