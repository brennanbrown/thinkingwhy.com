"""
Generate favicon assets from SVG source
"""
import os
from PIL import Image
import cairosvg

# Configuration
INPUT_SVG = "public/favicon.svg"
OUTPUT_DIR = "public/favicons"
SIZES = [16, 32, 48, 64, 128, 256]

# Create output directory
os.makedirs(OUTPUT_DIR, exist_ok=True)

# Generate PNGs
for size in SIZES:
    output_path = os.path.join(OUTPUT_DIR, f"favicon-{size}x{size}.png")
    cairosvg.svg2png(url=INPUT_SVG, write_to=output_path, output_width=size, output_height=size)
    print(f"Generated: {output_path}")

# Generate ICO
ico_path = os.path.join(OUTPUT_DIR, "favicon.ico")
images = []
for size in [16, 32, 48]:
    img_path = os.path.join(OUTPUT_DIR, f"favicon-{size}x{size}.png")
    img = Image.open(img_path)
    images.append(img)

images[0].save(ico_path, format='ICO', append_images=images[1:], save_all=True)
print(f"Generated: {ico_path}")
