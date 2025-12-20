import requests
from bs4 import BeautifulSoup
from pprint import pprint
from urllib.parse import urlparse
import os

def load_partners(file_path='.partners'):
    with open(file_path, 'r') as file:
        partners = [line.strip() for line in file if line.strip()]
    return partners

def fetch_partner_data(partner_url):
    try:
        response = requests.get(partner_url)
        response.raise_for_status()
        soup = BeautifulSoup(response.text, 'html.parser')
        
        # Example: Extracting the title and meta description
        title = soup.title.string if soup.title else 'No title found'
        meta_description = ''
        meta_tag = soup.find('meta', attrs={'name': 'description'})
        if meta_tag:
            meta_description = meta_tag.get('content', 'No description found')
        
        return {
            'url': partner_url,
            'title': title,
            'meta_description': meta_description
        }
    except requests.RequestException as e:
        print(f"Error fetching {partner_url}: {e}")
        return None

def partner_data_1(partner_url):
    parsed = urlparse(partner_url)
    response = requests.get(partner_url)
    soup = BeautifulSoup(response.text, 'html.parser')
    links_containers = soup.find_all('a', {'class':'linkteaser'})  # Example of finding specific elements
    categories = {i.find("p", class_=["p-4"]).text: i['href'] for i in links_containers}
    #urls = [ for i in links_containers]
    for category_name, url in categories.items():
        resposne = requests.get(f"{parsed.scheme}://{parsed.netloc}"+url)
        soup = BeautifulSoup(resposne.text, 'html.parser')
        container = soup.find('div', {'class':'container mx-auto py-10'})
        items = container.find_all('a')
        file_data = []
        for item in items:
            item_name = item.find("h4", class_=["font-normal", "text-2xl", "mb-4"]).text
            img = item.find("img")['src']

            response = requests.get(f"{parsed.scheme}://{parsed.netloc}"+img)

            os.makedirs("images", exist_ok=True)
            #with open(f"images/{item_name}.jpg", 'wb') as f:
            #    f.write(response.content)
            file_data.append({
                'provider': parsed.netloc,
                'category': category_name,
                'item_name': item_name,
                'image_path': f"images/{item_name}.jpg",
                'image_url': f"{parsed.scheme}://{parsed.netloc}"+img  
            })
        with open(f"{parsed.netloc}_{category_name}.json", 'w') as f:

            f.write(str(file_data))
def parter_data_2(partner_url):
    parsed = urlparse(partner_url)
    response = requests.get(partner_url)
    soup = BeautifulSoup(response.text, 'html.parser')
    pprint(soup.prettify())

def main():
    partners = load_partners()
    partner_data_1(partners[0])  # Process only the first partner for now
    #parter_data_2(partners[1])  # Process only the second partner for now
if __name__ == '__main__':
    main()