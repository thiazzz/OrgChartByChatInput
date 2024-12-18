export const delay = (ms: number): Promise<void> => 
  new Promise(resolve => setTimeout(resolve, ms));

export const isValidResponse = (response: unknown): boolean => {
  if (!response || typeof response !== 'object') return false;
  return 'success' in response && 'message' in response;
};

export const updateOrgChart = (
  orgData: any,
  newDepartment: DepartmentData,
  parentName?: string
): any => {
  const addDepartmentToNode = (node: any): boolean => {
    if (!parentName) {
      node.children = node.children || [];
      node.children.push({
        id: newDepartment.id,
        name: newDepartment.name,
        role: 'Department Head',
        children: []
      });
      return true;
    }

    if (node.name === parentName) {
      node.children = node.children || [];
      node.children.push({
        id: newDepartment.id,
        name: newDepartment.name,
        role: 'Department Head',
        children: []
      });
      return true;
    }

    if (node.children) {
      for (const child of node.children) {
        if (addDepartmentToNode(child)) {
          return true;
        }
      }
    }

    return false;
  };

  const newOrgData = JSON.parse(JSON.stringify(orgData));
  addDepartmentToNode(newOrgData);
  return newOrgData;
};