from typing import Optional
from fastapi import FastAPI


app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Hello World","title":"你爸爸","python":"傻逼也就写写小项目"}


@app.get("/passwd/{item_id}")
def read_item(item_id: int, username: Optional[str] = None, t: Optional[str] = None):
    return {"id": item_id, "username":username,"password":t}



@app.get("/ad/{item_id}")
def read_item(item_id: int, username: Optional[str] = None, t: Optional[str] = None):
    return {"id": item_id, "username":username,"password":t}
