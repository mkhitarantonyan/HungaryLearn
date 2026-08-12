Audio files for lesson slides.

This project looks for static files by these exact names:

Lesson 1 (11 slides):
- 1.1.mp3  -> lesson 1, slide 1
- 1.2.mp3  -> lesson 1, slide 2
- ...
- 1.11.mp3 -> lesson 1, slide 11

Lesson 2 (10 slides):
- 2.1.mp3  -> lesson 2, slide 1
- 2.2.mp3  -> lesson 2, slide 2
- ...
- 2.10.mp3 -> lesson 2, slide 10

Place files in this folder so they are available by URL /audio/<file>.
Example: public/audio/2.1.mp3 is served as /audio/2.1.mp3

Important:
- Audio uploaded through the app modal is saved in browser IndexedDB (local to one browser/device profile).
- To persist across devices/deployments, store files on server/cloud and serve stable URLs.
