#!/bin/bash
# SessionStart hook: make the GitHub CLI (gh) available in Claude Code on the web.
#
# Why this exists:
#   - The remote container is ephemeral, so anything installed in a session is
#     lost when the container is reclaimed. This hook re-installs gh each session.
#   - The apt repo (cli.github.com) is blocked by the egress policy, so we pull
#     the release tarball directly from github.com, which IS allowed.
#   - No GitHub token is needed: git push and gh's REST calls are authenticated
#     by the harness proxy automatically (the GH_TOKEN in the env is a proxy
#     placeholder, not a real PAT). Nothing here needs to be rotated.
#
# Runs synchronously so gh is guaranteed ready before the agent loop starts.
set -euo pipefail

# Only run in the remote (Claude Code on the web) environment.
if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

# Idempotent: nothing to do if gh is already on PATH.
if command -v gh >/dev/null 2>&1; then
  echo "gh already installed: $(gh --version | head -1)"
  exit 0
fi

GH_VERSION="2.63.2"
ARCH="$(dpkg --print-architecture 2>/dev/null || echo amd64)"
TARBALL="gh_${GH_VERSION}_linux_${ARCH}.tar.gz"
URL="https://github.com/cli/cli/releases/download/v${GH_VERSION}/${TARBALL}"

TMPDIR="$(mktemp -d)"
trap 'rm -rf "$TMPDIR"' EXIT

echo "Installing gh ${GH_VERSION} (${ARCH}) from github.com release..."
curl -fsSL -o "$TMPDIR/$TARBALL" "$URL"
tar -xzf "$TMPDIR/$TARBALL" -C "$TMPDIR"
install -m 755 "$TMPDIR/gh_${GH_VERSION}_linux_${ARCH}/bin/gh" /usr/local/bin/gh

echo "Installed: $(gh --version | head -1)"
