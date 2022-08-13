#[macro_use]
extern crate rocket;

use std::env;
use std::net::Ipv4Addr;

use rocket::config::Config;
use rocket::fs::FileServer;
use rocket::response::Redirect;

#[launch]
fn rocket() -> _ {
    let config = Config {
        address: Ipv4Addr::new(0, 0, 0, 0).into(),
        port: env::var("PORT")
            .ok()
            .and_then(|port| port.parse::<u16>().ok())
            .expect("Invalid PORT environment variable"),
        ..Config::default()
    };

    rocket::custom(&config)
        .mount("/", FileServer::from("public"))
        .register("/", catchers![not_found])
}

#[catch(404)]
fn not_found() -> Redirect {
    Redirect::to(uri!("/"))
}
