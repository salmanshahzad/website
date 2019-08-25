stickybits("#projects-header");

const modal = new tingle.modal();
modal.setContent(`
<div style="font-family: 'Raleway', sans-serif;">
<p>HTML5 logo: <a rel="nofollow" href="http://www.w3.org/html/logo/index.html">W3C</a> [<a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>], <a href="https://commons.wikimedia.org/wiki/File%3AHTML5_logo_and_wordmark.svg">via Wikimedia Commons</a></p>
<p>React logo: Facebook [Public domain or <a href="https://creativecommons.org/licenses/by-sa/1.0">CC BY-SA 1.0 </a>], <a href="https://commons.wikimedia.org/wiki/File:React-icon.svg">via Wikimedia Commons</a></p>
<p>Node.js logo: By node.js authors (https://nodejs.org/about/resources/) [Public domain], <a href="https://commons.wikimedia.org/wiki/File:Node.js_logo.svg">via Wikimedia Commons</a></p>
<p>PostgreSQL logo: By Daniel Lundin [<a href="http://opensource.org/licenses/bsd-license.php">BSD</a>], <a href="https://commons.wikimedia.org/wiki/File:Pg_logo.png">via Wikimedia Commons</a></p>
<p>PHP logo: By Colin Viebrock (http://php.net/logos) [<a href="https://creativecommons.org/licenses/by-sa/4.0">CC BY-SA 4.0 </a>], <a href="https://commons.wikimedia.org/wiki/File:PHP-logo.svg">via Wikimedia Commons</a></p>
<p>MySQL logo: By Oracle (Unknown) [Public domain], <a href="https://commons.wikimedia.org/wiki/File:Mysql-dolphin-square.svg">via Wikimedia Commons</a></p>
<p>Android logo: Google Inc. [<a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>], <a href="https://commons.wikimedia.org/wiki/File%3AAndroid_robot.svg">via Wikimedia Commons</a></p>
</div>
`);

document.getElementById("attributions").addEventListener("click", () => modal.open(), false);
