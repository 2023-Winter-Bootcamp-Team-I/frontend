// WebSocketProvider.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

type WsData = {
  type: string;
  pageCnt: number;
  userName?: string;
  fairyTale?: string;
  gender?: string;
  age?: number;
  language?: string;
  choice?: number;
  koContent?: string;
  enContent?: string;
};

interface WebSocketContextProps {
  socket: WebSocket | null;
  send: (data: WsData) => void;
}

const WebSocketContext = createContext<WebSocketContextProps | undefined>(undefined);

export const WebSocketProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [socket, setSocket] = useState<WebSocket | null>(null);

  return <WebSocketContext.Provider value={{ socket, setSocket }}>{children}</WebSocketContext.Provider>;
};

export const useWebSocket = (): WebSocketContextProps => {
  const context = useContext(WebSocketContext);
  if (!context) {
    throw new Error('useWebSocket must be used within a WebSocketProvider');
  }
  return context;
};
