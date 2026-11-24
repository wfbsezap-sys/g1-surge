// Google One /ai SKU rewrite for Surge (http-response)
// 把 20TB / 30TB AI Pro 的 iOS 内购 SKU 换成优惠档
let body = $response.body;
if (typeof body !== 'string') { $done({}); } else {
  let hits = 0;
  body = body
    .replace(/g1\.ios\.30tb\.ai\.pro\.m/g, () => { hits++; return 'g1.ai.ultra.3months_ip_90p.acq'; })
    .replace(/g1\.ios\.20tb\.m\.v2/g, () => { hits++; return 'g1.20tb.3months_ip_90p.acq'; });
  console.log('[g1-surge] body=' + $response.body.length + 'B hits=' + hits);
  $done({ body });
}
