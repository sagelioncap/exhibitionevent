export interface ArtPiece {
  id: string;
  title: string;
  artist: string;
  imageUrl: string;
  price: number;
  available: boolean;
}

export interface Buyer {
  id: string;
  name: string;
  email: string;
  phone?: string;
}

export interface Sale {
  id: string;
  artPieceId: string;
  artPieceTitle: string;
  buyerName: string;
  buyerEmail: string;
  price: number;
  saleDate: string;
  createdAt: string;
}
