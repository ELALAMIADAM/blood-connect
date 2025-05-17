import api from '../config/api';

export interface BloodRequest {
  id?: number;
  bloodType: string;
  units: number;
  urgency: 'low' | 'medium' | 'high';
  location: string;
  contactNumber: string;
  additionalNotes?: string;
}

export const bloodRequestService = {
  async createRequest(data: BloodRequest) {
    const response = await api.post('/blood-requests', data);
    return response.data;
  },

  async getRequests() {
    const response = await api.get('/blood-requests');
    return response.data;
  },

  async getRequest(id: number) {
    const response = await api.get(`/blood-requests/${id}`);
    return response.data;
  },

  async updateRequest(id: number, data: Partial<BloodRequest>) {
    const response = await api.put(`/blood-requests/${id}`, data);
    return response.data;
  },

  async deleteRequest(id: number) {
    const response = await api.delete(`/blood-requests/${id}`);
    return response.data;
  }
}; 