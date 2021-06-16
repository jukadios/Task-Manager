export interface Tasks {
    Token: string;
    title: string;
    is_completed: string;
    // due_date?: Date;
    due_date?: string;
    comments?: string;
    description?: string;
    tags?: string;
  }