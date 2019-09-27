// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import { ReactInstance, Surface, Location } from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  const navigationPanel = new Surface(1000, 100, Surface.SurfaceShape.Flat);
  navigationPanel.setAngle(0, -0.3);
  r360.renderToSurface(r360.createRoot('Navigation'), navigationPanel);

  const location = new Location([-100, 10, -2]);
  r360.renderToLocation(r360.createRoot('Helicopter'), location);

  // Render your app content to the default cylinder surface
  r360.renderToSurface(
    r360.createRoot('Panel', {
      /* initial props */
    }),
    r360.getDefaultSurface(),
  );

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('360_world.jpg'));
}

window.React360 = { init };
