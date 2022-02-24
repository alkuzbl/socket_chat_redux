export type InitialStateForApp = {
  status: 'idle' | 'loading' | 'succeed' | 'failed';
  error: string | undefined;
  isInitialized: boolean;
};
