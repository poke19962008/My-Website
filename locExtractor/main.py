# Extracted data is present at ./loc.json

import os, requests, json

# All the file extensions mapping
fileName = {
    "py": "Python",
    "swift": "Swift",
    "html": "HTML",
    "css": "CSS",
    "js": "JavaScript",
    "h": "C++",
    "cpp": "C++",
    "sh": "Shell",

}

data = {}
for project in os.listdir("data/"):
    for rawFile in open('data/' + project, 'r').read().split("\n")[:-1]:
        rawFile = rawFile.replace("https://raw.githubusercontent.com", "https://cdn.rawgit.com")
        try:
            # print "[EXTRACTING] CDN: " + rawFile
            sourceCode = requests.get(rawFile)
            ext = rawFile.split(".")[-1]
            try:
                ext = fileName[ext]
            except:
                print "[ERROR] Cannot get file extension: " + rawFile.split(".")[-1]
            loc = len(sourceCode.text.split('\n'))

            if data.has_key(ext):
                data[ext] = data[ext] + loc
            else:
                data[ext] = loc

            print "[SUCCESS] GET: " + rawFile
        except:
            print "[ERROR] Cannot GET: " + rawFile

file_ = open("loc.json", 'w')
file_.write(json.dumps(data, indent=2))
