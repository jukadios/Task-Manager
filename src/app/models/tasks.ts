// Interfaz del objeto para mejores practicas
export interface Tasks {
    id?: number;
    token: string;
    title: string;
    is_completed: string;
    due_date?: string;
    comments?: string;
    description?: string;
    tags?: string;
  }