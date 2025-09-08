// Projects objects types
export interface Project {
    id: number;
    status: string;
    title: string;
    challenge: string;
    solution: string;
    results: string[];
    url: string;
    icon: string;
  }
  
// Services objects types
export interface Service {
    id: number;
    status: string;
    title: string;
    price: string;
    icon: string;
    timeframe: string;
    description: string;
    best_for: string;
}