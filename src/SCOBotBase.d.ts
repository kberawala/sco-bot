export class SCOBotBase {
  constructor(options?: {
    version?: string;
    createDate?: string;
    modifiedDate?: string;
    debug?: boolean;
    isActive?: boolean;
    throw_alerts?: boolean;
    preferred_API?: 'findAPI' | 'findAPI' | 'findSCORM12' | 'findSCORM2004';
    prefix?: string;
    exit_type?: 'suspend' | 'finish';
    success_status?: 'unknown' | 'passed' | 'failed' | 'unknown';
    use_standalone?: boolean;
    standalone?: boolean;
    completion_status?: 'completed' | 'incomplete' | 'unknown';
    time_type?: 'GMT' | 'UTC';
    cmi?: object;
    latency_arr?: any[];
  });
}
