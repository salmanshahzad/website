bun build --compile --minify --sourcemap --target bun-linux-x64 index.ts --outfile website_new
ROOT=/home/salman/website
scp website_new server:$ROOT/website_new
ssh server "mv $ROOT/website_new $ROOT/website && sudo systemctl restart website"
rm website_new
