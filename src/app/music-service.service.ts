import { Injectable } from '@angular/core';
import { Artist } from './../models/artists.model';
import { Album } from '../models/albums.model';
import * as exampledata from '../data/sample-music-data.json';

@Injectable({
  providedIn: 'root'
})
export class MusicServiceService {
  albums: Album[] = (exampledata as any).default;

  getArtists(): Artist[] {
    // Implementation here
  }

  getAlbums(artist: string): Album[] {
    // Implementation here
  }

  getAlbum(artist: string, id: number): Album | null {
    // Implementation here
  }

  createAlbum(album: Album): number {
    // Implementation here
  }

  updateAlbum(album: Album): number {
    // Implementation here
  }

  deleteAlbum(id: number, artist: string): number {
    // Implementation here
  }
}
