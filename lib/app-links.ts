const APP_BASE_URL = "https://app.smarterbot.cl"

export function buildAppUrl(token: string) {
  const url = new URL(APP_BASE_URL)
  url.searchParams.set("token", token)
  return url.toString()
}

export function openAppWithToken(token: string) {
  window.open(buildAppUrl(token), "_blank")
}
