import { SharedWorkerGlobalScope } from '../@types/worker';

const ws = new WebSocket('ws://localhost:8001/ws/analytics');

declare var onconnect:
  | ((this: SharedWorkerGlobalScope, ev: MessageEvent) => any)
  | null;

// Event handler called when a tab tries to connect to this worker.
onconnect = (e) => {
  // Get the MessagePort from the event. This will be the
  // communication channel between SharedWorker and the Tab
  const port = e.ports[0];

  if (ws.OPEN) {
    port.onmessage = (msg) => {
      ws.send(JSON.stringify({ analytics: msg.data }));
    };
  }
};
