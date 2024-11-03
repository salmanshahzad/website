use std::{env, process};

use sfs::Server;

fn main() {
    let port = match env::var("PORT") {
        Ok(port) => port,
        Err(e) => {
            eprintln!("Invalid PORT environment variable: {e}");
            process::exit(1);
        }
    };
    let port = match port.parse::<u16>() {
        Ok(port) => port,
        Err(e) => {
            eprintln!("Invalid PORT environment variable: {e}");
            process::exit(1);
        }
    };
    let server = Server::new("public");
    if let Err(e) = server.and_then(|s| s.listen(port)) {
        eprintln!("Error starting server: {e}");
        process::exit(1);
    }
}
