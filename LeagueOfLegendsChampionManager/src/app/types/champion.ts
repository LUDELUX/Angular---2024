export interface Rating {
  userId: string; 
  rating: number;   
}

export interface Champion {
  _id: string;      
  name: string;     
  photo: string;   
  role: 'Assassin' | 'Mage' | 'Tank' | 'Support' | 'Marksman' | 'Fighter'; 
  location: string; 
  position: string; 
  ratings: Rating[]; 
  createdBy: string; 
  createdAt: string; 
  updatedAt: string; 
}