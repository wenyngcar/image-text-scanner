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


# Store the readers here after use. (Lazy Loading/Caching Method)
readers: dict[str, easyocr.Reader] = {}


def get_reader(lang: str):
    if lang not in readers:
        readers[lang] = easyocr.Reader(supported_languages[lang])
    return readers[lang]


@app.post('/upload-image')
async def upload_image(image: UploadFile):

    # Read the stream of bytes and stores the actual binary content of the image.
    contents = await image.read()

    # Open using PIL. BytesIO return image object that PIL can read.
    im = Image.open(BytesIO(contents))

    # EasyOCR expects an image in NumPy array format (RGB pixel values).
    im_array = np.array(im)

    scores, texts = {}, {}
    # Iterate the supported_languages and test for every easyocr reader instance.
    for lang in supported_languages:
        reader = get_reader(lang)  # cached after first use
        output = reader.readtext(im_array)
        scores[lang] = sum([read[2] for read in output])
        texts[lang] = [read[1] for read in output]

    # Scan the highest in scores and get the key (the language).
    best_lang = max(scores, key=scores.get)
    return {
        "language": best_lang,
        "text": "\n".join(texts[best_lang]),
    }
