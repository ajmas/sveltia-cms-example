# Sveltia CMS Example

Project to demonstrate how to launch Sveltia CMS. Currently in an
alpha state

```
npm install
npm run dev
```

Connect to http://127.0.0.1:8000

## Git-Gateway

The example leverages the [netlify/git-gateway](https://github.com/netlify/git-gateway) project
for the backend. Instructions on getting a basic installing up and running, assuming
are in the git-gateway project folder:

  - Install 'go'
    - macOS with Homebrew: `brew install go`
  - Install dependencies `go install`
  - Set up your environment variables, using `example.env` as reference
  - Launch the server: `go run main.go -c example.env`