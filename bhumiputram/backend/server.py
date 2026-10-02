from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
from pydantic import BaseModel, Field, ConfigDict, BeforeValidator
from typing import Annotated, List, Optional
from datetime import datetime, timezone
import os
import logging
from pathlib import Path

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI()
api_router = APIRouter(prefix="/api")

PyObjectId = Annotated[str, BeforeValidator(lambda v: str(v))]


class BaseDocument(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    id: Optional[PyObjectId] = None

    def to_mongo(self) -> dict:
        return self.model_dump(exclude={"id"}, exclude_none=True)

    @classmethod
    def from_mongo(cls, doc: dict):
        d = dict(doc)
        d["id"] = str(d.pop("_id", None))
        return cls(**d)


class CarDocument(BaseDocument):
    slug: str
    name: str
    category: str
    seats: int
    transmission: str
    fuel: str
    tag: str
    rate_12h: int
    rate_24h: int
    image: str
    gallery: List[str] = []
    order: int = 0


class ContactSubmission(BaseDocument):
    name: str = Field(min_length=2, max_length=120)
    phone: str = Field(min_length=6, max_length=20)
    message: str = Field(min_length=2, max_length=2000)
    created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())


class ContactCreate(BaseModel):
    name: str = Field(min_length=2, max_length=120)
    phone: str = Field(min_length=6, max_length=20)
    message: str = Field(min_length=2, max_length=2000)


IMG = "https://static.prod-images.emergentagent.com/jobs/dd7eeb72-eb23-4472-b72a-1f785d58f314/images"
HERO_ROAD = f"{IMG}/62b6e79447899c873ad9faea6b75af98ceade7c260c35fc7bd2a1716a18b3dfb.jpeg"
INTERIOR = f"{IMG}/1e9cdc56e48a4b10c6fd7cfba6de1f57b385a53e43a02fe7a1d0c41afc815e24.jpeg"

SEED_CARS = [
    {
        "slug": "maruti-suzuki-baleno", "name": "Maruti Suzuki Baleno", "category": "Sedan",
        "seats": 5, "transmission": "Manual", "fuel": "CNG + Petrol", "tag": "Most Popular",
        "rate_12h": 1099, "rate_24h": 1699,
        "image": f"{IMG}/7f38d19536312a711a4ae87367221a8616767975a13b1c7fe60bdbb8136afbca.jpeg",
        "gallery": [f"{IMG}/7f38d19536312a711a4ae87367221a8616767975a13b1c7fe60bdbb8136afbca.jpeg", INTERIOR, HERO_ROAD], "order": 1,
    },
    {
        "slug": "maruti-suzuki-dzire", "name": "Maruti Suzuki Dzire", "category": "Sedan",
        "seats": 5, "transmission": "Manual", "fuel": "CNG + Petrol", "tag": "CNG Saver",
        "rate_12h": 1299, "rate_24h": 1799,
        "image": f"{IMG}/d7bdd76fee46df712fb51af688a04601ad34db6b6aea3a1cde7cde4299aeb2f3.jpeg",
        "gallery": [f"{IMG}/d7bdd76fee46df712fb51af688a04601ad34db6b6aea3a1cde7cde4299aeb2f3.jpeg", INTERIOR, HERO_ROAD], "order": 2,
    },
    {
        "slug": "maruti-suzuki-fronx", "name": "Maruti Suzuki Fronx", "category": "SUV",
        "seats": 5, "transmission": "Manual", "fuel": "CNG + Petrol", "tag": "Crossover Style",
        "rate_12h": 1299, "rate_24h": 1799,
        "image": f"{IMG}/bf63776da37f99c6c1f4b68d27b50d864e90256557f4160fab210d8a386d12ac.jpeg",
        "gallery": [f"{IMG}/bf63776da37f99c6c1f4b68d27b50d864e90256557f4160fab210d8a386d12ac.jpeg", INTERIOR, HERO_ROAD], "order": 3,
    },
    {
        "slug": "tata-nexon", "name": "Tata Nexon", "category": "SUV",
        "seats": 5, "transmission": "Manual", "fuel": "Diesel", "tag": "Urban SUV",
        "rate_12h": 1599, "rate_24h": 2299,
        "image": HERO_ROAD, "gallery": [HERO_ROAD, INTERIOR], "order": 4,
    },
    {
        "slug": "kia-sonet-sunroof", "name": "Kia Sonet (Sunroof)", "category": "SUV",
        "seats": 5, "transmission": "Manual", "fuel": "CNG + Petrol", "tag": "Sunroof Special",
        "rate_12h": 1499, "rate_24h": 1999,
        "image": f"{IMG}/6585a9c321afd301717d4626ac4ca02a7ee5f61c7c94b8cd5fedfe4f87cf0a27.jpeg",
        "gallery": [f"{IMG}/6585a9c321afd301717d4626ac4ca02a7ee5f61c7c94b8cd5fedfe4f87cf0a27.jpeg", INTERIOR, HERO_ROAD], "order": 5,
    },
    {
        "slug": "hyundai-aura", "name": "Hyundai Aura", "category": "Sedan",
        "seats": 5, "transmission": "Manual", "fuel": "CNG + Petrol", "tag": "Value Sedan",
        "rate_12h": 1199, "rate_24h": 1699,
        "image": HERO_ROAD, "gallery": [HERO_ROAD, INTERIOR], "order": 6,
    },
    {
        "slug": "hyundai-verna", "name": "Hyundai Verna", "category": "Sedan",
        "seats": 5, "transmission": "Manual", "fuel": "CNG + Petrol", "tag": "Executive Comfort",
        "rate_12h": 1499, "rate_24h": 1999,
        "image": f"{IMG}/bf825f93fe5f463c8520e56e66154ebae8393ce670391d9501bc2382a599284d.jpeg",
        "gallery": [f"{IMG}/bf825f93fe5f463c8520e56e66154ebae8393ce670391d9501bc2382a599284d.jpeg", INTERIOR, HERO_ROAD], "order": 7,
    },
    {
        "slug": "maruti-suzuki-ertiga", "name": "Maruti Suzuki Ertiga", "category": "MUV",
        "seats": 7, "transmission": "Manual", "fuel": "CNG + Petrol", "tag": "Family 7-Seater",
        "rate_12h": 1699, "rate_24h": 2199,
        "image": f"{IMG}/caceadbca7749fa47a0e1bd56bd932399f653d8d7d00c62fba07ab24e23fb086.jpeg",
        "gallery": [f"{IMG}/caceadbca7749fa47a0e1bd56bd932399f653d8d7d00c62fba07ab24e23fb086.jpeg", INTERIOR, HERO_ROAD], "order": 8,
    },
    {
        "slug": "maruti-suzuki-xl6", "name": "Maruti Suzuki XL6", "category": "MUV",
        "seats": 6, "transmission": "Manual", "fuel": "CNG + Petrol", "tag": "Premium Family",
        "rate_12h": 1799, "rate_24h": 2499,
        "image": HERO_ROAD, "gallery": [HERO_ROAD, INTERIOR], "order": 9,
    },
    {
        "slug": "hyundai-creta", "name": "Hyundai Creta", "category": "SUV",
        "seats": 5, "transmission": "Manual", "fuel": "CNG + Petrol", "tag": "Popular SUV",
        "rate_12h": 1699, "rate_24h": 2599,
        "image": HERO_ROAD, "gallery": [HERO_ROAD, INTERIOR], "order": 10,
    },
    {
        "slug": "mahindra-thar", "name": "Mahindra Thar", "category": "SUV",
        "seats": 4, "transmission": "Manual", "fuel": "Petrol", "tag": "Adventure Ready",
        "rate_12h": 1999, "rate_24h": 2999,
        "image": HERO_ROAD, "gallery": [HERO_ROAD, INTERIOR], "order": 11,
    },
    {
        "slug": "mahindra-scorpio-s11", "name": "Mahindra Scorpio S11", "category": "SUV",
        "seats": 7, "transmission": "Manual", "fuel": "Diesel", "tag": "Premium SUV",
        "rate_12h": 2099, "rate_24h": 3299,
        "image": HERO_ROAD, "gallery": [HERO_ROAD, INTERIOR], "order": 12,
    },
    {
        "slug": "mahindra-scorpio-n", "name": "Mahindra Scorpio N", "category": "SUV",
        "seats": 7, "transmission": "Manual", "fuel": "Diesel", "tag": "Road Presence",
        "rate_12h": 2499, "rate_24h": 3499,
        "image": HERO_ROAD, "gallery": [HERO_ROAD, INTERIOR], "order": 13,
    },
]

# Keep these additions available when the database already has an older fleet.
# The original seed only runs for an empty collection, which would otherwise
# leave existing deployments without newly introduced models.
FLEET_ADDITION_SLUGS = {
    "mahindra-scorpio-n",
    "mahindra-scorpio-s11",
    "mahindra-thar",
    "hyundai-creta",
    "hyundai-verna",
    "tata-nexon",
    "maruti-suzuki-baleno",
    "maruti-suzuki-dzire",
    "maruti-suzuki-fronx",
    "hyundai-aura",
    "maruti-suzuki-ertiga",
    "maruti-suzuki-xl6",
}


@api_router.get("/")
async def root():
    return {"message": "Bhumiputram API is running"}


@api_router.get("/cars", response_model=List[CarDocument])
async def get_cars():
    docs = await db.cars.find().sort("order", 1).to_list(100)
    return [CarDocument.from_mongo(d) for d in docs]


@api_router.get("/cars/{slug}", response_model=CarDocument)
async def get_car(slug: str):
    doc = await db.cars.find_one({"slug": slug})
    if not doc:
        raise HTTPException(status_code=404, detail="Car not found")
    return CarDocument.from_mongo(doc)


@api_router.post("/contact")
async def create_contact(input: ContactCreate):
    submission = ContactSubmission(**input.model_dump())
    result = await db.contact_submissions.insert_one(submission.to_mongo())
    return {"ok": True, "id": str(result.inserted_id)}


@app.on_event("startup")
async def seed_fleet():
    car_count = await db.cars.count_documents({})
    if car_count == 0:
        await db.cars.insert_many([CarDocument(**c).to_mongo() for c in SEED_CARS])
        logger = logging.getLogger(__name__)
        logger.info("Seeded fleet collection")
        return

    existing_slugs = {
        car["slug"]
        async for car in db.cars.find({"slug": {"$in": list(FLEET_ADDITION_SLUGS)}}, {"slug": 1})
    }
    additions = [
        CarDocument(**car).to_mongo()
        for car in SEED_CARS
        if car["slug"] in FLEET_ADDITION_SLUGS and car["slug"] not in existing_slugs
    ]
    if additions:
        await db.cars.insert_many(additions)
        logging.getLogger(__name__).info("Added %d new fleet vehicles", len(additions))


app.include_router(api_router)
app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
