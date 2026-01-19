# Workout Tracker

A 12-week workout tracking application deployed on DigitalOcean Apps.

## Features
- 12-week training program (6-day split)
- Exercise tracking with video demonstrations
- Progress monitoring
- Local storage for workout data

## Deployment

This app is deployed as a static site on DigitalOcean Apps.

### Deploy to DigitalOcean

1. Push this repository to GitHub
2. Go to [DigitalOcean Apps](https://cloud.digitalocean.com/apps)
3. Click "Create App"
4. Select your GitHub repository
5. DigitalOcean will auto-detect the static site configuration
6. Click "Next" through the configuration (defaults are fine)
7. Click "Deploy"

Your app will be live at: `https://your-app-name.ondigitalocean.app`

### Manual Deployment Using doctl

```bash
doctl apps create --spec .do/app.yaml
```

## Tech Stack
- HTML5
- CSS3
- Vanilla JavaScript
- No backend required
- Client-side localStorage for data persistence

## Development

Simply open `index.html` in your browser or use a local server:

```bash
python -m http.server 8000
# Then visit http://localhost:8000
```

## Free Tier

This static site qualifies for DigitalOcean's free tier:
- 3 static sites free
- Global CDN
- Automatic SSL
- Custom domains supported
