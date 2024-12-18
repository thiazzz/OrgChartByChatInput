import React from 'react';
import { Users } from 'lucide-react';
import { NodeProps } from '../../types/org-chart';

export const Node: React.FC<NodeProps> = ({ node, isRoot = false }) => {
  return (
    <div className={`flex flex-col items-center ${isRoot ? '' : 'mt-4'}`}>
      <div className="relative">
        <div className="absolute -top-3 left-1/2 w-px h-3 bg-gray-300 transform -translate-x-1/2" 
             style={{ display: isRoot ? 'none' : 'block' }} />
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 w-48">
          <div className="flex items-center justify-center mb-2">
            <div className="bg-blue-100 p-2 rounded-full">
              <Users className="w-5 h-5 text-blue-600" />
            </div>
          </div>
          <h3 className="text-center font-medium text-gray-900">{node.name}</h3>
          <p className="text-center text-sm text-gray-500">{node.role}</p>
        </div>
      </div>
      {node.children && node.children.length > 0 && (
        <div className="relative">
          <div className="absolute top-0 left-1/2 w-px h-4 bg-gray-300 transform -translate-x-1/2" />
          <div className="flex justify-center gap-8 pt-4">
            {node.children.map((child) => (
              <Node key={child.id} node={child} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}