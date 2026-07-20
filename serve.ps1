$ErrorActionPreference = "Stop"

$python = Get-Command py -ErrorAction SilentlyContinue
if ($null -ne $python) {
  & py -m http.server 8000
  exit $LASTEXITCODE
}

$python = Get-Command python -ErrorAction SilentlyContinue
if ($null -ne $python) {
  & python -m http.server 8000
  exit $LASTEXITCODE
}

$bundledPython = "C:\Users\yamad\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe"
if (Test-Path -LiteralPath $bundledPython) {
  & $bundledPython -m http.server 8000
  exit $LASTEXITCODE
}

throw "Python が見つかりません。py / python か、Codex の bundled Python が必要です。"
