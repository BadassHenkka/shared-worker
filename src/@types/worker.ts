// TYPES COPIED OVER FROM https://www.npmjs.com/package/@types/sharedworker
// This was done because using the above generated types lead to some unrelated type conflicts

/** This Web Workers API interface is an interface representing the scope of any worker. Workers have no browsing context; this scope contains the information usually conveyed by Window objects — in this case event handlers, the console or the associated WorkerNavigator object. Each WorkerGlobalScope has its own event loop. */
interface WorkerGlobalScope
  extends EventTarget,
    FontFaceSource,
    WindowOrWorkerGlobalScope {
  /** Returns workerGlobal's WorkerLocation object. */
  readonly location: WorkerLocation;
  /** Returns workerGlobal's WorkerNavigator object. */
  readonly navigator: WorkerNavigator;
  onerror: ((this: WorkerGlobalScope, ev: ErrorEvent) => any) | null;
  onlanguagechange: ((this: WorkerGlobalScope, ev: Event) => any) | null;
  onoffline: ((this: WorkerGlobalScope, ev: Event) => any) | null;
  ononline: ((this: WorkerGlobalScope, ev: Event) => any) | null;
  onrejectionhandled:
    | ((this: WorkerGlobalScope, ev: PromiseRejectionEvent) => any)
    | null;
  onunhandledrejection:
    | ((this: WorkerGlobalScope, ev: PromiseRejectionEvent) => any)
    | null;
  /** Returns workerGlobal. */
  readonly self: WorkerGlobalScope & typeof globalThis;
  /** Fetches each URL in urls, executes them one-by-one in the order they are passed, and then returns (or throws if something went amiss). */
  importScripts(...urls: (string | URL)[]): void;
  addEventListener<K extends keyof WorkerGlobalScopeEventMap>(
    type: K,
    listener: (
      this: WorkerGlobalScope,
      ev: WorkerGlobalScopeEventMap[K]
    ) => any,
    options?: boolean | AddEventListenerOptions
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): void;
  removeEventListener<K extends keyof WorkerGlobalScopeEventMap>(
    type: K,
    listener: (
      this: WorkerGlobalScope,
      ev: WorkerGlobalScopeEventMap[K]
    ) => any,
    options?: boolean | EventListenerOptions
  ): void;
  removeEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | EventListenerOptions
  ): void;
}

/** The absolute location of the script executed by the Worker. Such an object is initialized for each worker and is available via the WorkerGlobalScope.location property obtained by calling self.location. */
interface WorkerLocation {
  readonly hash: string;
  readonly host: string;
  readonly hostname: string;
  readonly href: string;
  toString(): string;
  readonly origin: string;
  readonly pathname: string;
  readonly port: string;
  readonly protocol: string;
  readonly search: string;
}

/** A subset of the Navigator interface allowed to be accessed from a Worker. Such an object is initialized for each worker and is available via the WorkerGlobalScope.navigator property obtained by calling window.self.navigator. */
interface WorkerNavigator
  extends NavigatorConcurrentHardware,
    NavigatorID,
    NavigatorLanguage,
    NavigatorNetworkInformation,
    NavigatorOnLine,
    NavigatorStorage {
  readonly mediaCapabilities: MediaCapabilities;
}

interface WorkerGlobalScopeEventMap {
  error: ErrorEvent;
  languagechange: Event;
  offline: Event;
  online: Event;
  rejectionhandled: PromiseRejectionEvent;
  unhandledrejection: PromiseRejectionEvent;
}

interface SharedWorkerGlobalScopeEventMap extends WorkerGlobalScopeEventMap {
  connect: MessageEvent;
}

export interface SharedWorkerGlobalScope extends WorkerGlobalScope {
  /** Returns sharedWorkerGlobal's name, i.e. the value given to the SharedWorker constructor. Multiple SharedWorker objects can correspond to the same shared worker (and SharedWorkerGlobalScope), by reusing the same name. */
  readonly name: string;
  onconnect: ((this: SharedWorkerGlobalScope, ev: MessageEvent) => any) | null;
  /** Aborts sharedWorkerGlobal. */
  close(): void;
  addEventListener<K extends keyof SharedWorkerGlobalScopeEventMap>(
    type: K,
    listener: (
      this: SharedWorkerGlobalScope,
      ev: SharedWorkerGlobalScopeEventMap[K]
    ) => any,
    options?: boolean | AddEventListenerOptions
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): void;
  removeEventListener<K extends keyof SharedWorkerGlobalScopeEventMap>(
    type: K,
    listener: (
      this: SharedWorkerGlobalScope,
      ev: SharedWorkerGlobalScopeEventMap[K]
    ) => any,
    options?: boolean | EventListenerOptions
  ): void;
  removeEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | EventListenerOptions
  ): void;
}
