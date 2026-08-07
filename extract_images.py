import fitz  # PyMuPDF
import os

pdf_files = [
    'INDIQUBE.pdf',
    'Intense Care Company Profile 2-1.pdf',
    'Techfin Enterprises.pdf'
]

output_dir = 'public/images'
os.makedirs(output_dir, exist_ok=True)

for pdf_file in pdf_files:
    if not os.path.exists(pdf_file):
        print(f"File not found: {pdf_file}")
        continue
        
    doc = fitz.open(pdf_file)
    prefix = pdf_file.split('.')[0][:10].replace(' ', '_').lower()
    img_count = 0
    
    for page_index in range(len(doc)):
        page = doc[page_index]
        image_list = page.get_images()
        
        for image_index, img in enumerate(image_list, start=1):
            xref = img[0]
            base_image = doc.extract_image(xref)
            image_bytes = base_image["image"]
            image_ext = base_image["ext"]
            image_filename = f"{output_dir}/{prefix}_p{page_index+1}_i{image_index}.{image_ext}"
            
            with open(image_filename, "wb") as f:
                f.write(image_bytes)
            img_count += 1
            print(f"Saved {image_filename}")
            
    print(f"Extracted {img_count} images from {pdf_file}")
