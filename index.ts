import fs from "node:fs";
import path from "node:path";

// biome-ignore lint/complexity/useLiteralKeys: index signature
const port = Number.parseInt(process.env["PORT"] ?? "");
if (Number.isNaN(port) || port < 0 || port > 65535) {
    console.error("Invalid PORT");
    process.exit(1);
}

Bun.serve({
    port,
    fetch(req) {
        try {
            const pathname =
                new URL(req.url).pathname.substring(1) || "index.html";
            const filePath = path.join("public", pathname);
            if (!fs.existsSync(filePath)) {
                return new Response(null, { status: 404 });
            }
            if (req.method !== "GET" && req.method !== "HEAD") {
                return new Response(null, { status: 405 });
            }
            return new Response(Bun.file(filePath));
        } catch {
            return new Response(null, { status: 500 });
        }
    },
});
