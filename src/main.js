// This global flag enables manual initialization.
window.CMS_MANUAL_INIT = true;
// Usage with import from npm package
import CMS, { init } from '@sveltia/cms';
// // Usage with script tag
console.log('Hello World');

init({
  config: {
    backend: {
      name: 'git-gateway',
    },
    load_config_file: false,
    media_folder: "static/images/uploads",
    public_folder: "/images/uploads",
    collections: [
      { label: "Blog", name: "blog", folder: "_posts/blog", create: true, fields: [
        { label: "Title", name: "title", widget: "string" },
        { label: "Publish Date", name: "date", widget: "datetime" },
        { label: "Featured Image", name: "thumbnail", widget: "image" },
        { label: "Body", name: "body", widget: "markdown" },
      ]},
    ],
  },
})

// The registry works as expected, and can be used before or after init.
// CMS.registerPreviewTemplate(...);