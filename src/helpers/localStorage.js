export const loadState = async () => {
  try {
    const appSettings = await window.localAgent.AppSettings();
    if (appSettings === null) {
      return undefined;
    }
    return JSON.parse(appSettings);
  } catch (err) {
    return undefined;
  }
};

export const saveState = async (state) => {
  try {
    const appSettings = JSON.stringify(state);
    await window.localAgent.SetAppSettings(appSettings);
  } catch (err) {
    // Ignore write errors.
  }
};
