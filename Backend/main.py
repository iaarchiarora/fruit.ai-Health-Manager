from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from bson import ObjectId
from typing import List
from models.faq_model import FAQModel
from db.database import faq_collection, faq_helper
from pymongo.errors import DuplicateKeyError

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],  
    allow_headers=["*"],  
)



@app.get("/faqs", response_model=List[FAQModel])
async def get_faqs():
    faqs = list(faq_collection.find())
    return [faq_helper(faq) for faq in faqs]


@app.get("/faqs/{faq_id}", response_model=FAQModel)
async def get_faq(faq_id: str):
    try:
        faq = faq_collection.find_one({"_id": ObjectId(faq_id)})
        if faq is None:
            raise HTTPException(status_code=404, detail="FAQ not found")
        return faq_helper(faq)
    except Exception:
        raise HTTPException(status_code=400, detail="Invalid FAQ ID")


@app.post("/faqs", response_model=FAQModel)
async def create_faq(faq: FAQModel):
    faq_data = faq.dict(exclude_unset=True)  
    result = faq_collection.insert_one(faq_data) 
    created_faq = faq_collection.find_one({"_id": result.inserted_id})  
    return faq_helper(created_faq)  


@app.put("/faqs/{faq_id}", response_model=FAQModel)
async def update_faq(faq_id: str, updated_faq: FAQModel):
    try:
        faq_id = ObjectId(faq_id)
    except Exception:
        raise HTTPException(status_code=400, detail="Invalid FAQ ID format")

    result = faq_collection.replace_one({"_id": faq_id}, updated_faq.dict(), upsert=False)
    if result.matched_count == 0:
        raise HTTPException(status_code=404, detail="FAQ not found")
    faq = faq_collection.find_one({"_id": faq_id})
    return faq_helper(faq)


@app.delete("/faqs/{faq_id}")
async def delete_faq(faq_id: str):
    try:
        faq_id = ObjectId(faq_id)
    except Exception:
        raise HTTPException(status_code=400, detail="Invalid FAQ ID format")

    result = faq_collection.delete_one({"_id": faq_id})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="FAQ not found")
    return {"status": "FAQ deleted"}
