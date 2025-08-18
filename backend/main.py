from fastapi import FastAPI, UploadFile
from fastapi.middleware.cors import CORSMiddleware
import easyocr
from languages import supported_languages
from PIL import Image
from io import BytesIO
import numpy as np


app = FastAPI()

# URL of the frontend.
# Replace if deployed.
origins = [
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

# Reader instace from easyocr.
readers = {lang: easyocr.Reader(codes)
           for lang, codes in supported_languages.items()}


@app.post('/upload-image')
async def upload_image(image: UploadFile):

    contents = await image.read()
    im = Image.open(BytesIO(contents))
    im_array = np.array(im)

    scores = {}  # store cumulative scores per language
    texts = {}

    for lang, reader in readers.items():
        output = reader.readtext(im_array)
        score = sum([read[2] for read in output])
        text_output = [read[1] for read in output]

        scores[lang] = score
        texts[lang] = text_output

    # Get the language with the highest score
    best_lang = max(scores, key=scores.get)
    # best_score = scores[best_lang]

    # Join into a single paragraph
    best_paragraph = " ".join(texts[best_lang])

    return {
        "language": best_lang.capitalize(),
        "text": best_paragraph
    }
