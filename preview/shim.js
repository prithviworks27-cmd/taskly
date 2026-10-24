// Preview-only stand-in for the Electron preload bridge, with synthetic sample data.
const day = (n) => new Date(Date.now() + n * 864e5).toLocaleDateString('en-CA');
const t = (title, due, done = false) => ({ id: Math.random().toString(36).slice(2, 9), title, due, done });
window.store = {
  save: () => Promise.resolve(),
  load: () => Promise.resolve({
    activeId: 'a',
    lists: [
      { id: 'a', name: 'Tasks', tasks: [
        t('Ship the 1.0 release notes', day(-2)),
        t('Book dentist appointment', day(0)),
        t('Renew passport photos', day(6)),
        t('Read the Müller-Brockmann chapter', ''),
        t('Call the bank about the card', day(-1)),
        t('Water the plants', '', true),
        t('Order printer toner', day(-3), true),
        t('Back up photos to the drive', '', true),
      ] },
      { id: 'b', name: 'Work', tasks: [t('Review pull request', day(1)), t('Plan sprint', '')] },
      { id: 'c', name: 'Home', tasks: [] },
    ],
  }),
};
