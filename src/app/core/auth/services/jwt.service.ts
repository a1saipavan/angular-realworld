import { Injectable, isDevMode } from '@angular/core';

const TOKEN_KEY = 'jwtToken';

@Injectable({ providedIn: 'root' })
export class JwtService {
  private inMemoryToken: string | null = null;

  getToken(): string | null {
    if (isDevMode()) {
      return window.localStorage[TOKEN_KEY] ?? null;
    }

    return this.inMemoryToken;
  }

  saveToken(token: string): void {
    if (isDevMode()) {
      window.localStorage[TOKEN_KEY] = token;
      return;
    }

    this.inMemoryToken = token;
  }

  destroyToken(): void {
    if (isDevMode()) {
      window.localStorage.removeItem(TOKEN_KEY);
      return;
    }

    this.inMemoryToken = null;
  }
}
