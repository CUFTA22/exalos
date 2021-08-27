export interface SettingsUpdates {
  customCursor?: boolean;
}

export interface Settings {
  customCursor: boolean;
}

export const initialSettings: Settings = {
  customCursor: false,
};
