import React from 'react';
import { Node } from './Node';
import { OrgNode } from '../../types/org-chart';

interface OrgChartProps {
  data: OrgNode;
}

export const OrgChart: React.FC<OrgChartProps> = ({ data }) => {
  return (
    <div className="w-full overflow-x-auto p-8">
      <div className="min-w-max">
        <Node node={data} isRoot={true} />
      </div>
    </div>
  );
}