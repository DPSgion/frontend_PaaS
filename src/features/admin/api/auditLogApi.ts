import axios from '../../../lib/axios';

export interface AuditLog {
  timestamp: string;
  actor: string;
  actionType: string;
  target: string;
  description: string;
}

export interface PaginatedAuditLogs {
  content: AuditLog[];
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
  last: boolean;
}

export const auditLogApi = {
  getLogs: async (
    page: number = 0,
    size: number = 10,
    user?: string,
    actionType?: string,
    fromDate?: string,
    toDate?: string
  ): Promise<PaginatedAuditLogs> => {
    const params: Record<string, any> = { page, size };
    
    if (user && user.trim() !== '') params.user = user.trim();
    if (actionType && actionType !== 'ALL') params.actionType = actionType;
    if (fromDate) params.fromDate = fromDate;
    if (toDate) params.toDate = toDate;

    const response = await axios.get('/audit-log', { params });
    return response.data;
  }
};