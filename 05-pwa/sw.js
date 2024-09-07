self.addEventListener('fetch', (event) => {
    event.respondWith(fetch(event.request))

    console.log('fetching', event.request.url)
})