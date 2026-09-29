# X adapter contract

ARG Data core must not depend on X-specific APIs. An X adapter only needs to emit normalized candidate objects.

```json
{
  "platform":"x",
  "external_id":"tweet-id",
  "url":"canonical tweet URL",
  "author":{"handle":"...","display_name":"...","verified":false},
  "published_at":"ISO-8601",
  "text":"raw tweet text",
  "metrics":{"likes":0,"reposts":0,"replies":0,"views":null},
  "language":"es"
}
```

The Radar converts this into one or more verifiable claims. X credentials and write access are deliberately isolated from Evidence/Verdict services. V0 may prepare a reply but never posts without human approval.
