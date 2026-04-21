import type { ArtPiece } from '@/types';

export const artPieces: ArtPiece[] = [
  {
    id: '1',
    title: 'Abstract Green & Black',
    artist: 'Contemporary Artist',
    imageUrl: 'https://images.unsplash.com/photo-1703936205356-11814e31bfda',
    price: 4500,
    available: true,
  },
  {
    id: '2',
    title: 'Sculpture Installation',
    artist: 'Modern Sculptor',
    imageUrl: 'https://images.unsplash.com/photo-1578163678052-eef169544f75',
    price: 12000,
    available: true,
  },
  {
    id: '3',
    title: 'Mixed-Media Fabric',
    artist: 'Fabric Artist',
    imageUrl: 'https://images.unsplash.com/photo-1628354283574-0bd71d8fe3d7',
    price: 7800,
    available: true,
  },
  {
    id: '4',
    title: 'Artist Talk',
    artist: 'Guest Speaker',
    imageUrl: 'https://img.rocket.new/generatedImages/rocket_gen_img_1a6402649-1776776880509.png',
    price: 3200,
    available: true,
  },
  {
    id: '5',
    title: 'Botanical Illustration',
    artist: 'Natural Artist',
    imageUrl: 'https://images.unsplash.com/photo-1632258521940-b29d7d2ae9f5',
    price: 5600,
    available: true,
  },
  {
    id: '6',
    title: 'Photography Exhibition',
    artist: 'Photo Artist',
    imageUrl: 'https://images.unsplash.com/photo-1620548687934-c856fc039693',
    price: 8900,
    available: true,
  },
];

export function getArtPieces() {
  return artPieces;
}

export function getArtPieceById(id: string) {
  return artPieces.find((p) => p.id === id);
}
