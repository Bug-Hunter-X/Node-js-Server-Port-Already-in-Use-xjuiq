# Node.js Server Port Already in Use

This repository demonstrates a common yet sometimes tricky error in Node.js: when your server fails to start because the specified port is already occupied by another process.  The example uses a basic HTTP server, but the principle extends to other server types.

## Problem
The provided `bug.js` file contains a simple HTTP server that attempts to listen on port 8080. If another application (e.g., another Node.js server, a web browser, etc.) is already using that port, the server will fail to start without providing sufficient information for easy debugging.  The initial error message isn't always clear to developers unfamiliar with low-level port usage.