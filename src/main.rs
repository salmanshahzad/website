use std::{env, net::SocketAddr};

use axum::{Router, Server};
use tower_http::services::ServeDir;

#[tokio::main]
async fn main() {
    let app = Router::new().nest_service("/", ServeDir::new("public"));

    let port = env::var("PORT")
        .ok()
        .and_then(|port| port.parse::<u16>().ok())
        .expect("Invalid PORT environment variable");
    let addr = SocketAddr::from(([0, 0, 0, 0], port));
    let server = Server::bind(&addr).serve(app.into_make_service());

    if let Err(err) = server.await {
        eprintln!("Server error: {err}");
    }
}
