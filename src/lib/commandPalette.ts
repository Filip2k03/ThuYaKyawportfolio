export const COMMAND_PALETTE_EVENT = 'tf:command-palette';

export function requestCommandPalette() {
  window.dispatchEvent(new Event(COMMAND_PALETTE_EVENT));
}
