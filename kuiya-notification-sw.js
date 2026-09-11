/* KUIYA CHAT - desktop notification Service Worker */
self.addEventListener('notificationclick', event => {
  event.notification.close();

  event.waitUntil((async () => {
    const clients = await self.clients.matchAll({
      type: 'window',
      includeUncontrolled: true
    });

    for (const client of clients) {
      if ('focus' in client) {
        await client.focus();
        return;
      }
    }

    if (self.clients.openWindow) {
      await self.clients.openWindow('./');
    }
  })());
});
