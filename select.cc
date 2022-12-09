# include <iostream>
using namespace std;
int main(){
cout<<"Welcome to KILLER Tools"<<endl;
cout<<"\033[5;31m作者QQ:2899356288 coding:killer(李宁波)\033[0m"<<endl;
cout<<"\033[5;31m===============================\033[0m"<<endl;
cout<<"\033[5;31m my name is nibaba\033[0m"<<endl;
cout<<"\033[5;31m===============================\033[0m"<<endl;
cout<<"\033[5;31m欢迎运行瞎几把写的工具\033[0m"<<endl;

cout<<"\033[5;31m+++++++++++++++++++++++++++++++++\033[0m"<<endl;
cout<<"官网:https://www.ninesleeves.online/element.html"<<endl;
cout<<"(1) 水叉攻击\n";
cout<<"(2) 钓鱼攻击\n";
int day;
cin>>day;
char str[] ="准备启动server";
switch (day) {
case 1:
cout<<"1.水叉攻击"<<str<<endl;
break;
case 2:
cout<<"2.钓鱼攻击："<<str<<endl;
break;}
return 0;
}