from PIL import Image
import os

folder = 'src/assets/images/products'
for f in os.listdir(folder):
    if f.endswith('.tif'):
        path = os.path.join(folder, f)
        img = Image.open(path)
        # Convert to RGB if necessary
        if img.mode in ('RGBA', 'LA', 'P'):
            img = img.convert('RGB')
        elif img.mode != 'RGB':
            img = img.convert('RGB')
        new_path = path.replace('.tif', '.jpg')
        img.save(new_path, 'JPEG', quality=90)
        print(f'Converted: {f} -> {f.replace(".tif", ".jpg")}')

print('Done!')


