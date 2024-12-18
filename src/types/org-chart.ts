export interface OrgNode {
  id: string;
  name: string;
  role: string;
  children?: OrgNode[];
}

export interface NodeProps {
  node: OrgNode;
  isRoot?: boolean;
}

export interface Message {
  id: string;
  text: string;
  type: 'user' | 'assistant';
  timestamp: Date;
}

export interface ApiResponse {
  success: boolean;
  message: string;
  data?: any;
}