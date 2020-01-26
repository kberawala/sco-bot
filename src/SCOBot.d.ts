export class SCOBot {
  constructor(options?: {
    interaction_mode?: 'state' | 'journaled';
    scaled_passing_score?: string;
    completion_threshold?: string;
    initiate_timer?: boolean;
    scorm_strict?: boolean;
    useJSONSuspendData?: boolean;
    doNotStatusUntilFinish?: boolean;
    base64?: boolean;
  });
  getvalue(name: string): string;
  setvalue(name: string, value: string): string;
  commit(): void;
  terminate(): void;
}
