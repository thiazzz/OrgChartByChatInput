export const sampleOrgData = {
  id: '1',
  name: 'John Doe',
  role: 'CEO',
  children: [
    {
      id: '2',
      name: 'Sarah Smith',
      role: 'CTO',
      children: [
        {
          id: '4',
          name: 'Mike Johnson',
          role: 'Lead Developer',
          children: [
            {
              id: '7',
              name: 'Alex Wilson',
              role: 'Frontend Developer'
            },
            {
              id: '8',
              name: 'Emma Davis',
              role: 'Backend Developer'
            }
          ]
        }
      ]
    },
    {
      id: '3',
      name: 'James Brown',
      role: 'CFO',
      children: [
        {
          id: '5',
          name: 'Lisa Anderson',
          role: 'Financial Analyst'
        },
        {
          id: '6',
          name: 'Tom Wilson',
          role: 'Accountant'
        }
      ]
    }
  ]
};