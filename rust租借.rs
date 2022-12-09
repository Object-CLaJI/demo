fn main() {
let mut s1 = String::from("oob");
//规定s1mut授权给s2借用
let s2 = &mut s1;
//s2饮用s1的数据并给s1传制及修改
s2.push_str("xxx");
println!("{}",s2);
}
