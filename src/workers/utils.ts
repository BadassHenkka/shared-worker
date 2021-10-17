import { UserEventData } from '../@types/userEvents';

export const createAnalyticsWorker = () => {
  const worker = new SharedWorker(
    // @ts-ignore
    new URL('./userAnalytics.sharedWorker.ts', import.meta.url)
  );

  const sendAnalyticsMsg = (userEventData: UserEventData) => {
    worker.port.postMessage({
      data: userEventData,
    });
  };

  return { sendAnalyticsMsg };
};
