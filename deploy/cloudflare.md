# Cloudflare + Vercel for thuyakyaw.com

Production canonical: `https://www.thuyakyaw.com`
Apex `https://thuyakyaw.com` must 308/301 onto www — never the other way around.

The live zone already uses Cloudflare nameservers (`anahi.ns.cloudflare.com`, `viddy.ns.cloudflare.com`) and orange-cloud A records. That is why browsers sometimes show `ERR_CONNECTION_FAILED` or a DNS probe error after a git push: Vercel has the new deployment, but Cloudflare’s proxy / SSL mode is fighting the origin certificate or a www/apex loop.

## DNS records (Cloudflare)

| Type | Name | Content | Proxy |
| --- | --- | --- | --- |
| CNAME | `www` | `cname.vercel-dns.com` | DNS only (grey cloud) preferred |
| A, AAAA or CNAME flattening | `@` | Vercel’s apex values from Project → Settings → Domains | DNS only preferred |

Do not point the zone at leftover IPs from an old host. In the Vercel domain panel, add both `thuyakyaw.com` and `www.thuyakyaw.com`, and set **www as the primary** so Vercel issues the apex → www redirect.

## Cloudflare SSL / TLS

This cannot be changed from the repo. Open:

`https://dash.cloudflare.com/?to=/:account/thuyakyaw.com/ssl-tls`

1. SSL/TLS → Overview → **Full (strict)**. Flexible mode causes HTTPS loops with Vercel (`ERR_TOO_MANY_REDIRECTS`). Live `www` currently reaches Vercel over HTTPS (no redirect loop), so the zone is already at least Full — confirm it is **strict**.
2. Turn **Always Use HTTPS** on.
3. Do **not** add a Cloudflare Redirect Rule that sends www → apex. Vercel already sends apex → www.
4. If a push is followed by connection failures, temporarily grey-cloud `www` and `@`. If the site loads on the Vercel URL and on grey-cloud, the proxy was the problem — then set Full (strict) and orange-cloud again only if you need Cloudflare WAF.

## After git push

1. GitHub `main` → Vercel production (Git integration).
2. Confirm `https://<project>.vercel.app` (the current Vercel hostname in the dashboard) returns 200.
3. Confirm `https://www.thuyakyaw.com/health` returns `{"ok":true,...}`.
4. Confirm `https://thuyakyaw.com` 308s to www.

If step 2 works and step 3 fails, it is DNS/TLS, not the Next.js build.
