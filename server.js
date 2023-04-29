const express = require('express');
const app = express();
require('dotenv').config();
const {auth, requiresAuth} = require('express-openid-connect');

app.use(
    auth({
        authRequired: false,
        auth0Logout: true,
        issuerBaseURL: process.env.ISSUER_BASE_URL,
        baseURL: process.env.BASE_URL,
        clientID: process.env.CLIENT_ID,
        secret: process.env.SECRET,
    })
);

app.use(express.static('./client'));

app.use(express.json());


const likedVideos = {}; // Store liked videos per user

app.post('/api/like-video', requiresAuth(), (req, res) => {
    const userId = req.oidc.user.sub;
    const { videoId, videoTitle } = req.body;

    if (!likedVideos[userId]) {
        likedVideos[userId] = [];
    }

    likedVideos[userId].push({ videoId, videoTitle });
    res.status(200).send({ message: 'Video liked' });
});

app.get('/api/liked-videos', requiresAuth(), (req, res) => {
    const userId = req.oidc.user.sub;
    res.status(200).send({ likedVideos: likedVideos[userId] || [] });
});

app.get('/api/liked-videos/count', requiresAuth(), (req, res) => {
    const userId = req.oidc.user.sub;
    const count = likedVideos[userId] ? likedVideos[userId].length : 0;
    res.status(200).send({ count });
});

app.get('/', (req, res) => {
    res.send(JSON.stringify(req.oidc.user));
});

app.get('/profile', requiresAuth(), (req, res) => {
    res.send(JSON.stringify(req.oidc.user));
})

app.get('/api/user-authenticated', (req, res) => {
    if (req.oidc.isAuthenticated()) {
      // Send user object if authenticated
      res.status(200).json({ user: req.oidc.user });
    } else {
      // Send a 401 status if not authenticated
      res.status(401).json({ message: 'User not authenticated' });
    }
  });

  app.get('/login', (req, res) => {
    const returnTo = req.query.returnTo || '/';
    req.oidc.login({ returnTo });
  });


const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Internal Server Error');
  });
