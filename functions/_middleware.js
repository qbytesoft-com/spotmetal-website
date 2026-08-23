export async function onRequest(context) {
  const { request, next } = context;
  const acceptHeader = request.headers.get('accept') || '';
  const url = new URL(request.url);

  // Check if AI Agent is requesting Markdown (Accept: text/markdown)
  if (acceptHeader.includes('text/markdown')) {
    const origin = url.origin;
    let markdownUrl = `${origin}/llms.txt`;

    if (url.pathname.startsWith('/docs')) {
      markdownUrl = `${origin}/llms-full.txt`;
    }

    try {
      const markdownResponse = await fetch(markdownUrl);
      if (markdownResponse.ok) {
        const text = await markdownResponse.text();
        const tokenEstimate = Math.ceil(text.length / 4);

        return new Response(text, {
          status: 200,
          headers: {
            'Content-Type': 'text/markdown; charset=utf-8',
            'Vary': 'Accept',
            'x-markdown-tokens': tokenEstimate.toString(),
            'Access-Control-Allow-Origin': '*',
            'Cache-Control': 'public, max-age=3600',
          },
        });
      }
    } catch (err) {
      // Fallback to default handler if markdown fetch fails
    }
  }

  // Default: proceed to static HTML asset
  const response = await next();
  
  // Clone and append Vary: Accept and Link headers if needed
  const newHeaders = new Headers(response.headers);
  newHeaders.set('Vary', 'Accept');
  newHeaders.set(
    'Link',
    '</.well-known/api-catalog>; rel="api-catalog", </.well-known/agent-skills/index.json>; rel="agent-skills", </.well-known/mcp.json>; rel="mcp-server", </.well-known/ai-plugin.json>; rel="ai-plugin", </llms.txt>; rel="describedby"; type="text/markdown", </docs>; rel="service-doc"'
  );

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: newHeaders,
  });
}
