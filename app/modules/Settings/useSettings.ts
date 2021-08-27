import { useState } from 'react';
import { initialSettings, Settings, SettingsUpdates } from './types';

const useSettings = () => {
  const [settings, setSettings] = useState<Settings>(initialSettings);

  const updateSettings = (args: SettingsUpdates) => setSettings({ ...settings, ...args });

  return { settings, updateSettings };
};

export default useSettings;
