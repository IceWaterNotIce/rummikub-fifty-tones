import time
import re
import uuid
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.select import Select
from datetime import datetime, timedelta
from webdriver_manager.chrome import ChromeDriverManager


options = webdriver.ChromeOptions()
service = Service(ChromeDriverManager().install())
driver = webdriver.Chrome(service=service, options=options)

driver.get("https://jisho.org/search/%23jlpt-n3%20%23adjective")
wait = WebDriverWait(driver, 10)  # Maximum wait time of 10 seconds
wait.until(EC.presence_of_element_located((By.TAG_NAME, "html")))

word_divs = driver.find_elements(By.CLASS_NAME, "concept_light")
print(len(word_divs))

for word_div in word_divs:
    span = word_div.find_elements(By.TAG_NAME, "span")
    word1 = span[0].text
    word2 = word_div.find_element(By.CLASS_NAME, "text").text
    print("{} {}".format(word1, word2))