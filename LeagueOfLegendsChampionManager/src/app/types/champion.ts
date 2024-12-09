export interface Rating {
  userId: string;  // Assuming userId is a string representing the user's ObjectId
  rating: number;   // Rating between 1 and 5
}

export interface Champion {
  _id?: string;      // The unique identifier for the champion (ObjectId as a string)
  name?: string;     // Champion name (e.g., "Aatrox")
  photo?: string;    // URL to the champion's photo (e.g., 'https://example.com/aatrox.jpg')
  role?: 'Assassin' | 'Mage' | 'Tank' | 'Support' | 'Marksman' | 'Fighter' | ' '; // Role of the champion
  location?: string; // The champion's location (e.g., 'Shurima')
  position?: string; // The champion's position (e.g., 'Top', 'Mid', 'Bot', 'Jungle')
  ratings?: Rating[]; // Array of ratings
  createdBy?: string; // The User ID that created the champion
  createdAt?: string; // Created timestamp (ISO 8601 format, can be used for sorting, etc.)
  updatedAt?: string; // Updated timestamp (ISO 8601 format)
}