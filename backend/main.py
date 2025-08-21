from fastapi import FastAPI, UploadFile, Query
from fastapi.middleware.cors import CORSMiddleware
import easyocr
from PIL import Image
from io import BytesIO
import numpy as np
from typing import List


app = FastAPI()

# URL of the frontend.
# Replace if deployed.
origins = [
    "https://image-text-scanner-two.vercel.app",
    "http://localhost:5173"
]

# Allows the send and receive of request from the specified port(origins).
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*']
)


# For deployment purposes only. To verify for successful deployment.
@app.get('/')
def read_root():
    return {"message": "success"}


@app.post('/upload-image')
async def upload_image(image: UploadFile, recognizer: List[str] = Query(...)):

    # Read the stream of bytes and stores the actual binary content of the image.
    contents = await image.read()

    # Open using PIL. BytesIO return image object that PIL can read.
    im = Image.open(BytesIO(contents))

    # EasyOCR expects an image in NumPy array format (RGB pixel values).
    im_array = np.array(im)

    # Initialize the reader with specified recognizer.
    reader = easyocr.Reader(recognizer)
    result = reader.readtext(im_array, detail=0)
    paragraph = "\n".join(result)
    return {
        "text": paragraph,
    }
