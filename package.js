Package.describe({
  "summary": "Send email via Mandrill's send-template.json",
  "git": "https://github.com/Wylio/meteor-mandrill",
  "version": "0.2.1",
  "name": "wylio:mandrill"
});

Package.onUse(function(api) {
    api.versionsFrom('METEOR@1.0');
    api.use(['email', 'http'], ['server']);
    api.addFiles('mandrill.js', 'server');
});
