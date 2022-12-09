use ferris_says::say;
use std::io::{stdout,BufWrite};

fn main(){
let stdout = stdout();
let message = String::("欢迎运行我是你爸爸得rust程序")；
let width = message.chars().count();
let mut write =BufWrite::new(stdout.lock());
say(message.as_bytes(),width,&mut write).unwrap();
}